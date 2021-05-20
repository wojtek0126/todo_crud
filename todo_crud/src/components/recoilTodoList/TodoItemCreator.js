/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useSetRecoilState } from 'recoil';
import { useState } from 'react'
import { todoListState } from '../../functions/recoil';
import InputField from '../atoms/InputField';
import ButtonPrimary from '../atoms/ButtonPrimary';
import { addTask } from '../../API/fetch';
import MediumText from '../atoms/MediumText';
import ButtonWithlink from '../atoms/ButtonWithLink';


function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');  
  const [callback, setCallback] = useState([]);  
  const setTodoList = useSetRecoilState(todoListState);


  const addItem = () => {
    const todoData =    {
      id: getId(),
      userId: "3",
      title: inputValue,
      completed: false,
      created_at: Date.now(),
      updated_at: "not updated yet"
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
     todoData,
    ]);
    setInputValue('');
    addTask(todoData);
    //reload easy way, if necessary may be replaced by state
    // window.location.reload();    
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };


  return (
    <Flex
    sx={{
      flexDirection: 'column',
      background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
      backgroundColor: 'foreground',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  ><MediumText text={'Create new task:'} marginBottom={2} />
      <InputField type={"text"} value={inputValue} onChange={onChange} backgroundColor={`foreground`} />
      <Flex sx={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <ButtonPrimary onClick={addItem} text={`add new task`} backgroundColor={`primary`} />
        <ButtonWithlink to={`home`} onClick={addItem} text={`back to main`} backgroundColor={`primary`} />
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