/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import ButtonPrimary from '../atoms/ButtonPrimary';
import MediumText from '../atoms/MediumText';


const YesNoPopup = ({onClickYes, onClickNo, messageText, yesText, noText}) => (
 <div sx={{alignSelf: 'center'}}>
    <ButtonPrimary text={yesText} onClick={onClickYes} backgroundColor={'buttons1'}/>
    <MediumText text={messageText} display={'flex'} alignSelf={'center'} />
    <ButtonPrimary text={noText} onClick={onClickNo} backgroundColor={'buttons3'}/>
 </div>
);


export default YesNoPopup;


    