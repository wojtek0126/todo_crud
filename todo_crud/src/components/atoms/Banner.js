/** @jsxRuntime classic */
/** @jsx jsx */  
import { useState } from 'react';
import { jsx, Textarea } from 'theme-ui';
import { Flex } from "theme-ui";
import ButtonPrimary from './ButtonPrimary';


const Banner = ({imageUrl, value}) => {
    const boardTxtFromLocal = localStorage.getItem('notes');
    const [boardText, setBoardText] = useState(boardTxtFromLocal);  
    const [updateButtonTxt, setUpdateButtonTxt] = useState("Remember");


    const handleClickSaveToLocal = (localKey, localValue, buttonText1, buttonText2) => {
        localStorage.setItem(localKey, localValue);
        setUpdateButtonTxt(buttonText2);
        setTimeout(() => {
          setUpdateButtonTxt(buttonText1);
        }, 1800) 
    }


  return ( 
    <Flex
    sx={{   
      maxHeight: '30vh',
      maxWidth: '100vw',   
      height: '26.3vh',   
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
                    <ButtonPrimary text={updateButtonTxt} backgroundColor={`buttons2`} 
                    onClick={() => handleClickSaveToLocal('notes', boardText, 'remember', 'remembered')} />
      </Flex>         
  );
};


export default Banner;


