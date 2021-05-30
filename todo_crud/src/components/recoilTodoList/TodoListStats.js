/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../functions/recoil';
import ProgressCounter from '../atoms/ProgressCounter';
import MediumText from '../atoms/MediumText';
import { todoActionStatsTitleTxt, 
  todoActionStatsTotalTxt,
  todoActionStatsCompletedTxt,
  todoActionStatsInProgressTxt
 } from '../../content/contentEng';


function TodoListStats() {
   
    
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum, 
    } = useRecoilValue(todoListStatsState);  

     
    return (
      <Flex
      sx={{
        flexDirection: 'column',           
        backgroundColor: 'boxBackground',
        border: '2px solid', 
        borderColor: 'boxBorder',
        borderRadius: 4,
        fontSize: 4,
        margin: 3,
        padding: 3,
      }}
    ><MediumText text={todoActionStatsTitleTxt} marginBottom={2} />
        <ProgressCounter text={`${todoActionStatsTotalTxt} ${totalNum}`} borderColor={`boxBorder`} 
        color={`counterText`} 
        backgroundColor={`counterAll`} />
        <ProgressCounter text={`${todoActionStatsCompletedTxt} ${totalCompletedNum}`}  borderColor={`boxBorder`} 
        color={`counterText`}
        backgroundColor={`counterCompleted`} />
        <ProgressCounter text={`${todoActionStatsInProgressTxt} ${totalUncompletedNum}`}  borderColor={`boxBorder`} 
        color={`counterText`}
        backgroundColor={`counterInProgress`} /> 
      </Flex>
    );
  }

  
  export default TodoListStats;

