/** @jsxRuntime classic */
/** @jsx jsx */  
import { useState } from 'react';
import { jsx } from 'theme-ui';
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
import TextArea from '../atoms/TextArea';


const ThoughtBoard = ({imageUrl}) => {
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
        // setBoardText(localValue);
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
        setBoardText("");
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
        <TextArea value={boardText} textareaBorderFocusColor={'inputBorderFocus'} onChange={e => setBoardText(e.target.value)}
           sx={{                   
              maxWidth: '100%',  
              minHeight: '14.5vh',
              backgroundImage: `url(${imageUrl})`,  
              fontFamily: 'blackboard',
              fontWeight: 'blackboardThick',
              color: 'textWhite',
              '&::placeholder' : {color: 'placeHolderText'}                   
           }}/>       
           <Flex sx={{flexWrap: 'wrap',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      '@media screen and (max-width: 700px)': {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}}>
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


