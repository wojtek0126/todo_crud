import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { useState, useEffect } from 'react'
import { filteredTodoListState, todoListState } from '../../functions/recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import { ThemeProvider, Container, Flex, Box } from 'theme-ui';
import theme from '../../styles/theme';
import { getAllTasks, getSingleTask } from '../../API/fetch';
import InputField from '../atoms/InputField';
import MediumText from '../atoms/MediumText';


function TodoList() {
  const [testing, setTesting] = useState([])

    const [todos, setTodos] = useRecoilState(todoListState)
    const [toSearch, setToSearch] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [taskList, setTaskList] = useState([]);
    const [taskText, setTaskText] = useState([]);
    const filteredData =  useRecoilValue(filteredTodoListState);
   
    useEffect(() => {
      const getTodos = async () => {
      getAllTasks(setTodos)
      }
     getTodos()
    getSingleTask(2, setTesting)
    console.log(testing, "api single task by id test")
   }, [])   

 
  
   useEffect(() => {  
      taskList.map(el => {        
          setTaskText(taskText => [...taskText, el.title]);})   
       }, [todos])
  
   useEffect(() => {
      let results = taskText.filter(item =>
        item.toString().toLowerCase().includes(toSearch)
      );
      setSearchResults(results); 
    }, [toSearch]);    
  
  let filterData = filteredData.filter(item => item.title.includes(toSearch));
  
      const handleChange = (e) => {
          setToSearch(e.target.value);
      }


    return (
      <ThemeProvider theme={theme}>       
        <Container>            
        <TodoItemCreator/>  
        <Flex         sx={{
          background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
          backgroundColor: 'foreground',
          borderRadius: 4,
          fontSize: 4,
          margin: 3,
          padding: 3,
          flexDirection: 'column'
        }}><MediumText text={' Find Your task:'} marginBottom={2} />
        <TodoListFilters />
        <InputField
          type={"text"}
          placeholder={"Search"}
          value={toSearch}
          onChange={handleChange}
          backgroundColor={`foreground`}
        /></Flex>
        <TodoListStats />              
        <Flex sx={{ flexWrap: 'wrap' }}>  
          {filterData.map((todoItem) => (
            <Box key={todoItem.id} sx={{ width: ['100%'] }}>
              <TodoItem key={todoItem.id} item={todoItem} />
            </Box>         
         ))}
          </Flex>
        </Container>     
      </ThemeProvider>
    
    );
  }


  export default TodoList;