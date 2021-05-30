/** @jsxRuntime classic */
/** @jsx jsx */  
import { useState } from 'react';
import { jsx, Textarea } from 'theme-ui';
import { Flex } from "theme-ui";
import { switchBtnTxt } from '../../functions/functionStorage';
import ButtonPrimary from '../atoms/ButtonPrimary';
import MediumText from '../atoms/MediumText';
import { thoughtBoardTitleTxt,
         thoughtRememberBtnTxt,
         thoughtForgetBtnTxt,
         thoughtForgottenTxt,
         thoughtRememberedTxt,
         thoughtRememberEmptyTxt,
         thoughtForgetEmpytTxt
} from '../../content/contentEng';


const ThoughtBoard = ({imageUrl}) => {

  // //thought board main menu text
  // const thoughtBoardTitleTxt = "Write down Your thoughts:";
  // const thoughtRememberBtnTxt = "Remember";
  // const thoughtForgetBtnTxt = "Forget";
  // const thoughtForgottenTxt = "Forgotten";
  // const thoughtRememberedTxt = "Remembered";
  // const thoughtRememberEmptyTxt = "Nothing to remember";
  // const thoughtForgetEmpytTxt = "Nothing to forget";

    const boardTxtFromLocal = localStorage.getItem('notes');
    const [boardText, setBoardText] = useState(boardTxtFromLocal);  
    const [rememberButtonTxt, setRememberButtonTxt] = useState(thoughtRememberBtnTxt);
    const [forgetButtonTxt, setForgetButtonTxt] = useState(thoughtForgetBtnTxt);    


    const handleClickSaveToLocal = (localKey, localValue, buttonText1, buttonText2, inputValue) => {
      //no empty content - validator        
      if ( inputValue === "" || inputValue === null || inputValue === undefined) {
        switchBtnTxt(setRememberButtonTxt, thoughtRememberBtnTxt, thoughtRememberEmptyTxt);
      }    
      else {    
        localStorage.setItem(localKey, localValue);       
        switchBtnTxt(setRememberButtonTxt, buttonText2, buttonText1);
      }      
    }

    const handleClickClearLocal = (buttonText1, buttonText2, inputValue) => {    
      if (inputValue === "" || inputValue === null || inputValue === undefined) {
        switchBtnTxt(setForgetButtonTxt, thoughtForgetBtnTxt, thoughtForgetEmpytTxt);      
      }
      else {
        localStorage.clear();            
        switchBtnTxt(setForgetButtonTxt, buttonText2, buttonText1);
        setTimeout(() => {
          window.location.reload();
        })
      }         
    }


  return ( 
    <Flex
    sx={{       
      maxWidth: '100vw',               
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
      marginBottom: 0
    }}
  >
      <MediumText text={thoughtBoardTitleTxt} marginBottom={2} />
        <Textarea onChange={e => setBoardText(e.target.value)}
           sx={{                   
              maxWidth: '100%',  
              minHeight: '14.5vh',
              backgroundImage: `url(${imageUrl})`,  
              fontFamily: 'blackboard',
              fontWeight: 'blackboardThick',
              color: 'textWhite',
              '&::placeholder' : {color: 'placeHolderText'}                   
           }}>
             {boardText}
             </Textarea>
                <Flex sx={{flexWrap: 'wrap',
                           flexDirection: 'row',
                           justifyContent: 'space-between'}}>
                    <ButtonPrimary text={rememberButtonTxt} backgroundColor={`buttons2`} 
                    onClick={() => handleClickSaveToLocal('notes', boardText, thoughtRememberedTxt, thoughtRememberBtnTxt, 
                    boardText)} />
                    <ButtonPrimary text={forgetButtonTxt} backgroundColor={`buttons3`}
                     onClick={() => handleClickClearLocal(thoughtForgottenTxt, thoughtForgetBtnTxt, boardText)}/>
                </Flex>                 
      </Flex>         
  );
};


export default ThoughtBoard;


