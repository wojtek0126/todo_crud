/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, ThemeProvider, Container, Flex, Box } from 'theme-ui';
import theme from '../../styles/theme';
import Title from '../molecules/Title';
import { getAllTasks } from '../../API/fetch';
import Task from '../molecules/Task';


const MainView = () => {
const [tasks, setTasks] = useState([])


// get all tasks from db
useEffect(() => {
  return getAllTasks(`todos`, setTasks);    
}, []);


  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}      
        <Container>      
        <Title />      
        <Flex sx={{ flexWrap: 'wrap' }}>        {
                    tasks.map((task) => {                                         
                        return (
                            <Box key={task.id} sx={{ width: ['100%', '50%', '33.33%'] }}>
                              <Task id={task.id} taskName={task.name} taskDescription={task.description} status={task.status} />
                            </Box>
                        )
                    })
                }
          </Flex>
        </Container>
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default MainView;

{/* <Box key={index} sx={{ width: ['100%', '50%', '33.33%'] }}>
                <Task name={tasksArr.length}/>                
              </Box> */}