/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { todoListState } from '../../functions/recoil';
import ButtonPrimary from '../atoms/ButtonPrimary';
import { addTask } from '../../API/fetch';
import MediumText from '../atoms/MediumText';
import ButtonWithlink from '../atoms/ButtonWithLink';
import TextArea from '../atoms/TextArea';
import { timeStampFormatted } from '../../functions/functionStorage';


function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');  
  const [updateBtnTxt, setUpdateBtnTxt] = useState("Add new task");
  const setTodoList = useSetRecoilState(todoListState);  


  const addItem = () => {
    const todoData =    {
      id: getId(),
      // user_id: userId,
      title: inputValue,
      completed: false,
      created_at: timeStampFormatted(),
      updated_at: "not updated yet"
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
     todoData,
    ]);
    setInputValue('');
    addTask(todoData); 
    setUpdateBtnTxt('New task added');
    setTimeout(() => {
      setUpdateBtnTxt('Add new task');
    }, 1800)     
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };


  return (
    <Flex
    sx={{
      flexDirection: 'column',
      background: 'box',   
      backgroundColor: 'boxBackground',
      color: 'text',      
      border: '2px solid',
      borderColor: 'boxBorder', 
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  ><MediumText text={'Create new task:'} marginBottom={2} />
      <TextArea value={inputValue} onChange={onChange} backgroundColor={`inputBackground`} 
      placeholder={`What needs to be done?`}/>
      <Flex sx={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <ButtonPrimary onClick={addItem} text={updateBtnTxt} backgroundColor={`buttons2`} />
        <ButtonWithlink to={`home`} text={`Back to main`} backgroundColor={`buttons1`} />
      </Flex>
    </Flex>
  );
}


// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}


export default TodoItemCreator;