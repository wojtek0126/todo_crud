/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../functions/recoil";
import ProgressCounter from '../atoms/ProgressCounter';
import MediumText from '../atoms/MediumText';


function TodoListStats() {
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    } = useRecoilValue(todoListStatsState);
  
    //percentage completed feature - disabled at the momend, see jsx below commented - uncomment to enable
    const formattedPercentCompleted = Math.round(percentCompleted);

     
    return (
      <Flex
      sx={{
        flexDirection: 'column',
        background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
        backgroundColor: 'foreground',
        borderRadius: 4,
        fontSize: 4,
        margin: 3,
        padding: 3,
      }}
    ><MediumText text={'Your progress:'} marginBottom={2} />
        <ProgressCounter text={`Total tasks: ${totalNum}`} />
        <ProgressCounter text={`Completed: ${totalCompletedNum}`} />
        <ProgressCounter text={`In progress: ${totalUncompletedNum}`} />
        {/* <ProgressCounter text={`Percent completed: ${formattedPercentCompleted}`} />    */}
      </Flex>
    );
  }


  export default TodoListStats;