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
  titleStatsToActionBtnTxt
} from '../../content/contentEng';


function TitleStats() {
    const [todos, setTodos] = useRecoilState(todoListState);     

     // decoy for empty state todos
    //  console.log(todos);


    useEffect(() => {
       const getTodos = async () => {
       getAllTasks(setTodos)
       }
      getTodos()  
    }, [])  
    
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
        backgroundColor: 'boxBackground',
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
        <ButtonWithlink  to={'action'} text={titleStatsToActionBtnTxt} backgroundColor={`buttons1`} />
      </Flex>
    );
  }


  export default TitleStats;

