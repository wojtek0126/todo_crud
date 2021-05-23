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
import { dateFormatter } from '../../functions/specials';


function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');  
  const setTodoList = useSetRecoilState(todoListState); 

  //date formatting
  const t = new Date();  
  const time = dateFormatter(t);


  const addItem = () => {
    const todoData =    {
      id: getId(),
      // user_id: userId,
      title: inputValue,
      completed: false,
      created_at: time,
      updated_at: "not updated yet"
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
     todoData,
    ]);
    setInputValue('');
    addTask(todoData);     
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
      <Flex sx={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <ButtonPrimary onClick={addItem} text={`Add new task`} backgroundColor={`buttons2`} />
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