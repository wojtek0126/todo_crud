/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../functions/recoil";
import ProgressCounter from '../atoms/ProgressCounter';
import MediumText from '../atoms/MediumText';
import ButtonWithlink from '../atoms/ButtonWithLink';


function TitleStats() {

    
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    } = useRecoilValue(todoListStatsState);
  
    //percentage completed feature 
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
        <ProgressCounter text={`Percent completed: ${formattedPercentCompleted}`} />   
        <ButtonWithlink to={`action`} text={`to action`} backgroundColor={`primary`} />

      </Flex>
    );
  }


  export default TitleStats;

