/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui'
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../functions/recoil';
import ProgressCounter from '../atoms/ProgressCounter';
import MediumText from '../atoms/MediumText';
import { todoActionStatsTitleTxt, 
  todoActionStatsTotalTxt,
  todoActionStatsCompletedTxt,
  todoActionStatsInProgressTxt
 } from '../../content/contentEng';
import StatsWrapper from '../containers/StatsWrapper';


const TodoListStats = () => {
      
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum, 
    } = useRecoilValue(todoListStatsState);  

     
    return (
      <StatsWrapper contentArea={
        <>
        <MediumText text={todoActionStatsTitleTxt} marginBottom={2} />
        <ProgressCounter text={`${todoActionStatsTotalTxt} ${totalNum}`} borderColor={`boxBorder`} 
        color={`counterText`} 
        backgroundColor={`counterAll`} />
        <ProgressCounter text={`${todoActionStatsCompletedTxt} ${totalCompletedNum}`}  borderColor={`boxBorder`} 
        color={`counterText`}
        backgroundColor={`counterCompleted`} />
        <ProgressCounter text={`${todoActionStatsInProgressTxt} ${totalUncompletedNum}`}  borderColor={`boxBorder`} 
        color={`counterText`}
        backgroundColor={`counterInProgress`} /> 
        </>
      } />
     
    );
  }

  
  export default TodoListStats;

