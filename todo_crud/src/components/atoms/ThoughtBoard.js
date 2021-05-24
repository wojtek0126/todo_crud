/** @jsxRuntime classic */
/** @jsx jsx */  
import { useState } from 'react';
import { jsx, Textarea } from 'theme-ui';
import { Flex } from "theme-ui";
import { switchBtnTxt } from '../../functions/functionStorage';
import ButtonPrimary from './ButtonPrimary';
import MediumText from './MediumText';


const ThoughtBoard = ({imageUrl, value}) => {
    const boardTxtFromLocal = localStorage.getItem('notes');
    const [boardText, setBoardText] = useState(boardTxtFromLocal);  
    const [updateButtonTxt, setUpdateButtonTxt] = useState("Remember");
    const [updateButton2Txt, setUpdateButton2Txt] = useState("Forget");


    const handleClickSaveToLocal = (localKey, localValue, buttonText1, buttonText2) => {
        localStorage.setItem(localKey, localValue);       
        switchBtnTxt(setUpdateButtonTxt, buttonText2, buttonText1);
    }

    const handleClickClearLocal = (buttonText1, buttonText2) => {
        localStorage.clear();       
        switchBtnTxt(setUpdateButton2Txt, buttonText2, buttonText1);
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
                    }}>{value}</Textarea>
                    <Flex sx={{flexWrap: 'wrap',
                               flexDirection: 'row',
                               justifyContent: 'space-between'}}>
                        <ButtonPrimary text={updateButtonTxt} backgroundColor={`buttons2`} 
                        onClick={() => handleClickSaveToLocal('notes', boardText, 'remembered', 'remember')} />
                        <ButtonPrimary text={updateButton2Txt} backgroundColor={`buttons3`}
                         onClick={() => handleClickClearLocal('Forgotten', 'Forget')}/>
                    </Flex>
                 
      </Flex>         
  );
};


export default ThoughtBoard;


