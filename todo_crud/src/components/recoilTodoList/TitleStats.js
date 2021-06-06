/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, Flex } from 'theme-ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, todoListStatsState } from "../../functions/recoil";
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
    const setTodos = useRecoilState(todoListState);    


    useEffect(() => {
       const getTodos = async () => {
       getAllTasks(setTodos)
       }
      getTodos()  
    }, [setTodos]);  
    
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    } = useRecoilValue(todoListStatsState);
  
    //percentage completed feature - round it to nearest whole number
    const formattedPercentCompleted = Math.round(percentCompleted);
 
     
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
        <ProgressCounter text={`${titleStatsTotalTxt} ${totalNum}`}
         backgroundColor={'counterAll'} color={`counterText`} />
        <ProgressCounter text={`${titleStatsCompletedTxt} ${totalCompletedNum}`}
         backgroundColor={'counterInProgress'} color={`counterText`}/>
        <ProgressCounter text={`${titleStatsInProgressTxt} ${totalUncompletedNum}`}
         backgroundColor={'counterCompleted'} color={`counterText`}/>
        <ProgressCounter text={`${titleStatsPercentCompletedTxt} ${formattedPercentCompleted}`}
         backgroundColor={'counterPercentage'} color={`counterText`}/>  
        <ButtonWithlink to={'action'} text={enterListBtnIcon} backgroundColor={buttonBackgroundType1} alignSelf={'baseline'}/>
      </Flex>
    );
  }


  export default TitleStats;

