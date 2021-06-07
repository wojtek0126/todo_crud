/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, Flex } from 'theme-ui';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { todoListState, todoListStatsState } from "../../functions/recoil";
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
  enterListBtnIcon
} from '../../content/contentEng';
import { buttonBackgroundType1, taskBackground } from '../../styles/themes/theme';


const TitleStats = () => {
    // const setTodos = useRecoilState(todoListState);   
    // // const getTodos = useRecoilValue(todoListState)
    const [tasksStatsTitle, setTasksStatsTitle] = useState([]) 


    useEffect(() => {
       const getTodos = async () => {
      //  getAllTasks(setTodos);
       getAllTasks(setTasksStatsTitle);
       }
      getTodos();  
    }, []);  

    const titleStats = nonRecoilStats(tasksStatsTitle);
    
    // const {
    //   totalNum,
    //   totalCompletedNum,
    //   totalUncompletedNum,
    //   percentCompleted,
    // } = useRecoilValue(todoListStatsState);
  
    //percentage completed feature - round it to nearest whole number
    // const formattedPercentCompleted = Math.round(percentCompleted);
 
    console.log(titleStats.totalNumTitleScrn);

    return (
      <Flex
      sx={{
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
      }}
    ><MediumText text={titleStatsTitleTxt} marginBottom={2} />
        <ProgressCounter text={`${titleStatsTotalTxt} ${titleStats.totalNumTitleScrn}`}
         backgroundColor={'counterAll'} color={`counterText`} />
        <ProgressCounter text={`${titleStatsCompletedTxt} ${titleStats.totalCompletedNumTitleScrn}`}
         backgroundColor={'counterInProgress'} color={`counterText`}/>
        <ProgressCounter text={`${titleStatsInProgressTxt} ${titleStats.totalUncompletedNumTitleScrn}`}
         backgroundColor={'counterCompleted'} color={`counterText`}/>
        <ProgressCounter text={`${titleStatsPercentCompletedTxt} ${titleStats.percentCompletedTitleScrn}`}
         backgroundColor={'counterPercentage'} color={`counterText`}/>  
        <ButtonWithlink to={'action'} text={enterListBtnIcon} backgroundColor={buttonBackgroundType1} alignSelf={'baseline'}/>
      </Flex>
    );
  }


  export default TitleStats;

