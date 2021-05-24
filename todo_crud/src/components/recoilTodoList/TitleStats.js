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


function TitleStats() {
    const [todos, setTodos] = useRecoilState(todoListState);

     // decoy for empty state todos
     console.log(todos);


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
    ><MediumText text={'Your progress:'} marginBottom={2} />
        <ProgressCounter text={`Total tasks: ${totalNum}`}
         backgroundColor={'counterAll'} color={`counterText`} />
        <ProgressCounter text={`Completed: ${totalCompletedNum}`}
         backgroundColor={'counterInProgress'} color={`counterText`}/>
        <ProgressCounter text={`In progress: ${totalUncompletedNum}`}
         backgroundColor={'counterCompleted'} color={`counterText`}/>
        <ProgressCounter text={`Percent completed: ${formattedPercentCompleted}`}
         backgroundColor={'counterPercentage'} color={`counterText`}/>   
        <ButtonWithlink  to={'action'} text={'To action'} backgroundColor={`buttons1`} />
      </Flex>
    );
  }


  export default TitleStats;

