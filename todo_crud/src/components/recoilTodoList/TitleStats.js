/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { nonRecoilStats } from "../../functions/functionStorage";
import ProgressCounter from '../atoms/ProgressCounter';
import MediumText from '../atoms/MediumText';
import ButtonWithlink from '../atoms/ButtonWithLink';
import { getAllTasks } from '../../API/fetch';
import { titleStatsTitleTxt,
  titleStatsTotalTxt,  
  titleStatsCompletedTxt,
  titleStatsInProgressTxt,
  titleStatsPercentCompletedTxt,   
} from '../../content/contentEng';
import { buttonBackgroundType1 } from '../../styles/gradients';
import { enterListBtnIcon } from '../../content/icons';
import StatsTitleWrapper from '../containers/StatsTitleWrapper';


const TitleStats = () => {  
    const bulbOn = 'bulbOn';
    const bulbOff = 'bulbOff'; 
    const [tasksStatsTitle, setTasksStatsTitle] = useState([]) 
    const [tasksStatsTitleBtnLight, setTasksStatsTitleBtnLight] = useState(bulbOff) 



    useEffect(() => {
       const getTodos = async () => {
       getAllTasks(setTasksStatsTitle);
       }
      getTodos();  
    }, []);  

    const titleStats = nonRecoilStats(tasksStatsTitle);  
    
    const handleOnOffOnClick = (myTarget, setIt, on, off) => {
      if (myTarget === on) {
        setIt(off);
      }
      else {
        setIt(on);
      }
    } 
   

    return (
      <StatsTitleWrapper contentArea={
        <>
    <MediumText text={titleStatsTitleTxt} marginBottom={2} />
        <ProgressCounter text={`${titleStatsTotalTxt} ${titleStats.totalNumTitleScrn}`}
         backgroundColor={'counterAll'} color={`counterText`} />
        <ProgressCounter text={`${titleStatsCompletedTxt} ${titleStats.totalCompletedNumTitleScrn}`}
         backgroundColor={'counterInProgress'} color={`counterText`}/>
        <ProgressCounter text={`${titleStatsInProgressTxt} ${titleStats.totalUncompletedNumTitleScrn}`}
         backgroundColor={'counterCompleted'} color={`counterText`}/>
        <ProgressCounter text={`${titleStatsPercentCompletedTxt} ${titleStats.percentCompletedTitleScrn}`}
         backgroundColor={'counterPercentage'} color={`counterText`}/>  
        <ButtonWithlink to={'action'} text={enterListBtnIcon} backgroundColor={buttonBackgroundType1} alignSelf={'baseline'}
        color={tasksStatsTitleBtnLight} 
        onClick={() => handleOnOffOnClick(tasksStatsTitleBtnLight, setTasksStatsTitleBtnLight, bulbOn, bulbOff)} />
        </>
      } />     
    );
  }


  export default TitleStats;

