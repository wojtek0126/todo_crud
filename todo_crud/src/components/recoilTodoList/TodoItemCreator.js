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
import { todoCreatorAddTaskBtnTxt,
  todoCreatorTaskAddedTxt,  
  todoCreatorTaskEmptyTxt,
  todoCreatorTitleTxt,
  todoCreatorPlaceholderTxt, 
  todoCreatorBackToMainTxt,
  todoCreatorNotUpdatedYetTxt,   
} from '../../content/contentEng';


function TodoItemCreator() {  
  const [inputValue, setInputValue] = useState('');  
  const [createBtnTxt, setCreateBtnTxt] = useState(todoCreatorAddTaskBtnTxt);
  const setTodoList = useSetRecoilState(todoListState);  

//add new task handle
  const addItem = () => {
    const todoData =    {
      id: getId(),
      user_id: 704,
      title: inputValue,
      completed: false,
      created_at: timeStampFormatted(),
      updated_at: todoCreatorNotUpdatedYetTxt
    }  
  
    //no empty input validator
    if (todoData.title.length > 0 ) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
       todoData,
      ]);
      setInputValue('');
      addTask(todoData); 
      switchBtnTxt(setCreateBtnTxt, todoCreatorAddTaskBtnTxt, todoCreatorTaskAddedTxt);  
    }
    else {
      switchBtnTxt(setCreateBtnTxt, todoCreatorAddTaskBtnTxt, todoCreatorTaskEmptyTxt);
    }
     
  };

  //taking input value for task from textarea
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
  ><MediumText text={todoCreatorTitleTxt} marginBottom={2} />
      <TextArea textareaBorderFocusColor={'inputBorderFocus'} value={inputValue} onChange={handleOnChange} backgroundColor={`inputBackground`} 
      placeholder={todoCreatorPlaceholderTxt}/>
      <Flex sx={{flexDirection: 'row',
                 justifyContent: 'space-between',
                 flexWrap: 'wrap',
                 '@media screen and (max-width: 700px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'baseline',                  
                } }}>
        <ButtonPrimary onClick={addItem} text={createBtnTxt} backgroundColor={`buttons2`} />
        <ButtonWithlink to={`home`} text={todoCreatorBackToMainTxt} backgroundColor={`buttons1`} />
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