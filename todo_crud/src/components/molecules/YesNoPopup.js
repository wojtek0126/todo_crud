/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import ButtonPrimary from '../atoms/ButtonPrimary';
import MediumText from '../atoms/MediumText';


const YesNoPopup = ({onClickYes, onClickNo}) => (
 <>
    <ButtonPrimary text={`Yes`} onClick={onClickYes} backgroundColor={'buttons1'}/>
    <MediumText text={`Are You sure?`} display={'flex'} alignSelf={'center'} />
    <ButtonPrimary text={`No`} onClick={onClickNo} backgroundColor={'buttons3'}/>
 </>
);


export default YesNoPopup;


    