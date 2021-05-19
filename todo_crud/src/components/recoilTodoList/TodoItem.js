/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { todoListState } from '../../functions/recoil';
import ButtonPrimary from '../atoms/ButtonPrimary';
import CheckboxAtom from '../atoms/Checkbox';
import Checkbox from '../atoms/Checkbox';
import InputField from '../atoms/InputField';
import { deleteTask, updateTask } from '../../API/fetch';

function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState); 
    const index = todoList.findIndex((listItem) => listItem === item);
  
  
    const editItemText = ({target: {value}}) => {        
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value,
      });
      const todoDataMod =    {
        id: item.id,
        text: value,
        isComplete: item.isComplete,
      }
      updateTask(`todos`, item.id, todoDataMod)
      setTodoList(newList);      
    };
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });    
      const todoDataModCheck =    {
        id: item.id,
        text: item.text,
        isComplete: !item.isComplete,
      }
      updateTask(`todos`, item.id, todoDataModCheck) 
      setTodoList(newList);  
      
    };
  
    const deleteItem = () => {
        // const idArr =[]
      const newList = removeItemAtIndex(todoList, index);
    //   todoList.map((el) => {
    //     idArr.push(el.id);
    //   })
       deleteTask(`todos`, item.id); 
      setTodoList(newList);
    };

  
    return (
        <div
        sx={{
          background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
          backgroundColor: 'foreground',
          borderRadius: 4,
          fontSize: 4,
          margin: 3,
          padding: 3,
        }}
      >
        <InputField type={"text"} value={item.text} onChange={editItemText} backgroundColor={`foreground`}/>
        <CheckboxAtom   checked={item.isComplete} label={`Is task completed?`}
          onChange={toggleItemCompletion} />     
        <ButtonPrimary onClick={deleteItem} text={`delete`} backgroundColor={'primary'}/>
        <ButtonPrimary onClick={() => editItemText} text={`update`} backgroundColor={'primary'}/>
      </div>
    );
  }
  
  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  export default TodoItem;