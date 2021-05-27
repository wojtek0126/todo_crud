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
import { switchBtnTxt, timeStampFormatted } from '../../functions/functionStorage';


function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');  
  const [createBtnTxt, setCreateBtnTxt] = useState("Add new task");
  const setTodoList = useSetRecoilState(todoListState);  


  const addItem = () => {
    const todoData =    {
      id: getId(),
      user_id: 704,
      title: inputValue,
      completed: false,
      created_at: timeStampFormatted(),
      updated_at: "Not updated yet"
    }
  
    setTodoList((oldTodoList) => [
      ...oldTodoList,
     todoData,
    ]);
    //no empty input validator
    if (inputValue.length > 0 ) {
      setInputValue('');
      addTask(todoData); 
      switchBtnTxt(setCreateBtnTxt, 'Add new task', 'New task added');  
    }
    else if (inputValue.length < 1) {
      switchBtnTxt(setCreateBtnTxt, 'Add new task', 'Nothing to add');
    }
     
  };

  const handleOnChange = ({target: {value}}) => {
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
      <TextArea value={inputValue} onChange={handleOnChange} backgroundColor={`inputBackground`} 
      placeholder={`What needs to be done?`}/>
      <Flex sx={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <ButtonPrimary onClick={addItem} text={createBtnTxt} backgroundColor={`buttons2`} />
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