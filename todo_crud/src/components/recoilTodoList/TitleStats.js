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
        // backgroundColor: 'foreground',
        border: '2px solid black',
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
        <ButtonWithlink to={`action`} text={`To action`} backgroundColor={`buttons1`} />
      </Flex>
    );
  }


  export default TitleStats;

