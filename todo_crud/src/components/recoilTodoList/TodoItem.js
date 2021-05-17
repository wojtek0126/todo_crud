import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { todoListState } from '../../functions/recoil';
import ButtonPrimary from '../atoms/ButtonPrimary';
import InputField from '../atoms/InputField';

function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState); 
    const index = todoList.findIndex((listItem) => listItem === item);
  
  
    const editItemText = ({target: {value}}) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value,
      });
  
      setTodoList(newList);
    };
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });     
      setTodoList(newList);    
    };
  
    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
  
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
        <InputField
        id={'checkbox'}
          type={"checkbox"}
          checked={item.isComplete}
          onChange={toggleItemCompletion}
          backgroundColor={`foreground`}          
          textColor={`text`}
          height={`50px`}
          width={`50px`}
        />
        <ButtonPrimary onClick={deleteItem} text={`delete`} backgroundColor={'primary'}/>
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