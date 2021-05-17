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

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <InputField type={"text"} value={inputValue} onChange={onChange} backgroundColor={`foreground`} />
      <ButtonPrimary onClick={addItem} text={`add`} backgroundColor={`primary`} />
    </div>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;