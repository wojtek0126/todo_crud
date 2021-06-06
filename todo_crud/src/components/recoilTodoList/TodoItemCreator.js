/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { textInputState, todoListState } from '../../functions/recoil';
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
  openMenuBtnIcon,
  addTaskBtnIcon,
  goBackBtnIcon,   
} from '../../content/contentEng';
import { buttonBackgroundType1, buttonBackgroundType2, buttonBackgroundType3, taskBackground } from '../../styles/themes/theme';


const TodoItemCreator = () => {  
  const on = 'flex';
  const off = 'none';
 //for display control
  const [creatorBtnMenu, setCreatorBtnMenu] = useState(on);  
  const [creatorBtnAdd, setCreatorBtnAdd] = useState(off); 
  const [creatorBtnBack, setCreatorBtnBack] = useState(off); 
//
  const [textareaDisplay, setTextareaDisplay] = useState("");   
  const [createBtnTxt, setCreateBtnTxt] = useState(todoCreatorAddTaskBtnTxt);
  const setTodoList = useSetRecoilState(todoListState); 
  const setInput = useSetRecoilState(textInputState);  
  const getInput = useRecoilValue(textInputState);  
 

//add new task handle
  const addItem = (title) => {
    const todoData =    {
      id: getId(),
      user_id: 704,
      title: title,
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
      setInput('');
      addTask(todoData); 
      switchBtnTxt(setCreateBtnTxt, todoCreatorAddTaskBtnTxt, todoCreatorTaskAddedTxt);  
    }
    else {
      switchBtnTxt(setCreateBtnTxt, todoCreatorAddTaskBtnTxt, todoCreatorTaskEmptyTxt);
    }
     
  };

  //taking input value for task from textarea
  const handleonChange = ({target: {value}}) => {
    setTimeout(() => {
     setTextareaDisplay(value);
    },0);    
  };

   //onblur
   const handleonBlur = () => {
    setTimeout(() => {
      setInput(textareaDisplay);  
    },0);  
  };


   //display control function     
   const displayControlCreateTask = (setBtnMenu, setBtnAdd, setBtnBack) => {
      setCreatorBtnMenu(setBtnMenu);
      setCreatorBtnAdd(setBtnAdd);
      setCreatorBtnBack(setBtnBack);        
 };

  //popup menu control
  const handleTaskMenuOpenCloseBtn = () => {
      
    displayControlCreateTask(on, off, off); 
    setTimeout(() => {
      if (creatorBtnAdd === 'none') {
        displayControlCreateTask(on, on, on); 
      }
    },10);

  }


  return (
    <Flex
    sx={{
      flexDirection: 'column',
      background: 'box',   
      // backgroundColor: 'boxBackground',
      background: `${taskBackground}`,
      color: 'text',      
      border: '2px solid',
      borderColor: 'boxBorder', 
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  ><MediumText text={todoCreatorTitleTxt} marginBottom={2} />
      <TextArea textareaBorderFocusColor={'inputBorderFocus'} value={textareaDisplay} onBlur={handleonBlur}
       onChange={handleonChange} backgroundColor={`inputBackground`} 
      placeholder={todoCreatorPlaceholderTxt}/>
      <Flex sx={{flexDirection: 'row',
                 justifyContent: 'flex-start',
                 flexWrap: 'wrap',
                 '@media screen and (max-width: 700px)': {
                  flexDirection: 'column',
                  alignItems: 'baseline',
                  justifyContent: 'baseline'                  
                } }}>                  
        <ButtonPrimary text={openMenuBtnIcon} 
        onClick={handleTaskMenuOpenCloseBtn}
        backgroundColor={buttonBackgroundType1} displayIt={creatorBtnMenu} />
        <ButtonPrimary onClick={() => addItem(getInput)} text={addTaskBtnIcon} backgroundColor={buttonBackgroundType2}
        displayIt={creatorBtnAdd} />
        <ButtonWithlink to={`home`} text={goBackBtnIcon} backgroundColor={buttonBackgroundType3}
        displayIt={creatorBtnBack} alignSelf={'baseline'}/>
      </Flex>
    </Flex>
  );
}


// utility for creating unique Id
let id = 0;
const getId = () => {
  return id++;
}


export default TodoItemCreator;