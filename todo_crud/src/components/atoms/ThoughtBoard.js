/** @jsxRuntime classic */
/** @jsx jsx */  
import { useState } from 'react';
import { jsx, Textarea } from 'theme-ui';
import { Flex } from "theme-ui";
import { switchBtnTxt } from '../../functions/functionStorage';
import ButtonPrimary from './ButtonPrimary';
import MediumText from './MediumText';


const ThoughtBoard = ({imageUrl}) => {
    const boardTxtFromLocal = localStorage.getItem('notes');
    const [boardText, setBoardText] = useState(boardTxtFromLocal);  
    const [rememberButtonTxt, setRememberButtonTxt] = useState("Remember");
    const [forgetButtonTxt, setForgetButtonTxt] = useState("Forget");    


    const handleClickSaveToLocal = (localKey, localValue, buttonText1, buttonText2, inputValue) => {
      //no empty validator        
      if (inputValue !== null) {
        localStorage.setItem(localKey, localValue);       
        switchBtnTxt(setRememberButtonTxt, buttonText2, buttonText1);
      }    
      else {
        switchBtnTxt(setRememberButtonTxt, 'Remember', 'Nothing to remember');
      }      
    }

    const handleClickClearLocal = (buttonText1, buttonText2, inputValue) => {    
      if (inputValue !== null ) {
        localStorage.clear();            
        switchBtnTxt(setForgetButtonTxt, buttonText2, buttonText1);
      }
      else {
        switchBtnTxt(setForgetButtonTxt, 'Forget', 'Nothing to forget');
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
      <MediumText text={'Write down Your thoughts:'} marginBottom={2} />
        <Textarea onChange={e => setBoardText(e.target.value)}
                    sx={{                   
                       maxWidth: '100%',  
                       minHeight: '14.5vh',
                       backgroundImage: `url(${imageUrl})`,  
                       fontFamily: 'blackboard',
                       fontWeight: 'blackboardThick',
                       color: 'textWhite',
                       '&::placeholder' : {color: 'placeHolderText'}                   
                    }}>{boardText}</Textarea>
                    <Flex sx={{flexWrap: 'wrap',
                               flexDirection: 'row',
                               justifyContent: 'space-between'}}>
                        <ButtonPrimary text={rememberButtonTxt} backgroundColor={`buttons2`} 
                        onClick={() => handleClickSaveToLocal('notes', boardText, 'Remembered', 'Remember', 
                        boardText)} />
                        <ButtonPrimary text={forgetButtonTxt} backgroundColor={`buttons3`}
                         onClick={() => handleClickClearLocal('Forgot', 'Forget', boardText)}/>
                    </Flex>
                 
      </Flex>         
  );
};


export default ThoughtBoard;


