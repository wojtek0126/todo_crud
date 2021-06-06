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
         thoughtForgetEmpytTxt,
         openMenuBtnIcon,
         saveBtnIcon,
         deleteBtnIcon
} from '../../content/contentEng';
import TextArea from '../atoms/TextArea';
import { textInputState } from '../../functions/recoil';
import { useSetRecoilState } from 'recoil';
import { buttonBackgroundType1, buttonBackgroundType2, buttonBackgroundType3, taskBackground } from '../../styles/themes/theme';


const ThoughtBoard = ({imageUrl}) => {
   //display toggle style setting
   const on = 'flex';
   const off = 'none';

    const boardTxtFromLocal = localStorage.getItem('notes'); 
    
    //for display control
  const [boardBtnMenu, setBoardrBtnMenu] = useState(on);  
  const [boardBtnAdd, setBoardBtnAdd] = useState(off); 
  const [boardBtnDelete, setBoardBtnDelete] = useState(off); 

    const [boardText, setBoardText] = useState(boardTxtFromLocal);  
    const [rememberButtonTxt, setRememberButtonTxt] = useState(thoughtRememberBtnTxt);
    const [forgetButtonTxt, setForgetButtonTxt] = useState(thoughtForgetBtnTxt);  
    const setInput = useSetRecoilState(textInputState);     

    
    const handleOnChange = ({target: {value}}) => {
      setBoardText(value);
      setInput(value);
    };
   

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
        setBoardText("");
        })
      }         
    }

       //display control function     
   const displayControlBoard = (setBtnMenu, setBtnAdd, setBtnDel) => {
    setBoardrBtnMenu(setBtnMenu);
    setBoardBtnAdd(setBtnAdd);
    setBoardBtnDelete(setBtnDel);        
};

//popup menu control
const handleBoardOpenCloseBtn = () => {
    
  displayControlBoard(on, off, off); 
  setTimeout(() => {
    if (boardBtnAdd === 'none') {
      displayControlBoard(on, on, on); 
    }
  },10);

}


  return ( 
    <Flex
    sx={{       
      maxWidth: '100vw',               
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
      marginBottom: 0
    }}
  >
      <MediumText text={thoughtBoardTitleTxt} marginBottom={2} />
        <TextArea value={boardText} textareaBorderFocusColor={'inputBorderFocus'} onChange={handleOnChange}
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
                      justifyContent: 'flex-start',
                      '@media screen and (max-width: 700px)': {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}}>
               <ButtonPrimary text={openMenuBtnIcon} 
                  onClick={handleBoardOpenCloseBtn}
                  backgroundColor={buttonBackgroundType1} displayIt={boardBtnMenu} />
               <ButtonPrimary text={saveBtnIcon} backgroundColor={buttonBackgroundType2} 
               onClick={() => handleClickSaveToLocal('notes', boardText, thoughtRememberedTxt, thoughtRememberBtnTxt, 
               boardText)} displayIt={boardBtnAdd} />
               <ButtonPrimary text={deleteBtnIcon} backgroundColor={buttonBackgroundType3}
                onClick={() => handleClickClearLocal(thoughtForgottenTxt, thoughtForgetBtnTxt, boardText)}
                displayIt={boardBtnDelete}/>
           </Flex>                 
      </Flex>         
  );
};


export default ThoughtBoard;


