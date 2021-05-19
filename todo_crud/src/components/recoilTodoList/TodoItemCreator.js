/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import { useState, useEffect } from 'react'
import { todoListState } from '../../functions/recoil';
import InputField from '../atoms/InputField';
import ButtonPrimary from '../atoms/ButtonPrimary';
import { addTask, getAllTasks } from '../../API/fetch';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');  
  const setTodoList = useSetRecoilState(todoListState);
  // const setAccount = useSetRecoilState(accountState);

//   const createTask = useCallback(async (text)=> {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: { text },
//     });

//     const responseJson = await response.json();
//     setAccount(responseJson);
//   }, [setAccount]);

//   return register;

// }

// const RegisterForm = () => {
//   const register = useRegister();

//   const handleSubmit = async e => {
//     e.preventDefault();

//     await register(username);
//   };


  const addItem = () => {
    const todoData =    {
      id: getId(),
      text: inputValue,
      isComplete: false,
    }

    setTodoList((oldTodoList) => [
      ...oldTodoList,
     todoData,
    ]);
    setInputValue('');
    addTask(`todos`, todoData);
    window.location.reload();    
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
  > Create new task:
      <InputField type={"text"} value={inputValue} onChange={onChange} backgroundColor={`foreground`} />
      <ButtonPrimary onClick={addItem} text={`add`} backgroundColor={`primary`} />
    </Flex>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;