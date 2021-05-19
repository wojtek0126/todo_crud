import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { useState, useEffect } from 'react'
import { filteredTodoListState, todoListState } from '../../functions/recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import { jsx, ThemeProvider, Container, Flex, Box } from 'theme-ui';
import theme from '../../styles/theme';
import { getAllTasks } from '../../API/fetch';
import InputField from '../atoms/InputField';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
    const [todos, setTodos] = useRecoilState(todoListState)
    const [toSearch, setToSearch] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [taskList, setTaskList] = useState([]);
    // const [updatedTaskList, setUpdatedTaskList] = useState([]);
    const [taskText, setTaskText] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
   
    useEffect(() => {
      const getTodos = async () => {
      getAllTasks(`todos`, setTodos)
      }
     getTodos()
      // getAllTasks(`todos`, setTaskList);    
   }, [])

   console.log(todos, "todos 111")

//    useEffect(() => {
//     setUpdatedTaskList(taskList => [...taskList, {currentOrNewKey: filteredTodoListState}]);    
//  }, [])
  
// const todoListState = atom({
//   key: 'todoListState',
//   default: taskList,
// });
  
   useEffect(() => {
  
      taskList.map(el => {        
          setTaskText(taskText => [...taskText, el.text]);})
    
       }, [taskList])
  
   useEffect(() => {
      let results = taskText.filter(item =>
        item.toString().toLowerCase().includes(toSearch)
      );
      setSearchResults(results); 
    }, [toSearch]);  
  
  
  let filterData = todos.filter(item => item.text.includes(toSearch));
  console.log(filterData, "filllllllllllllllltred")
  
      const handleChange = (e) => {
          setToSearch(e.target.value);
      }


    return (
      <ThemeProvider theme={theme}>       
        <Container>            
        <TodoItemCreator/>  
        {/* <TodoListFilters /> */}
        <Flex         sx={{
          background: 'linear-gradient(rgba(10,0,0,0.1),transparent)',     
          backgroundColor: 'foreground',
          borderRadius: 4,
          fontSize: 4,
          margin: 3,
          padding: 3,
        }}>
        <InputField
          type={"text"}
          placeholder={"Search"}
          value={toSearch}
          onChange={handleChange}
        /></Flex>
        <TodoListStats />              
        <Flex sx={{ flexWrap: 'wrap' }}>  
          {filterData.map((todoItem) => (
            <Box sx={{ width: ['100%', '50%', '33.33%'] }}>
              <TodoItem key={todoItem.id} item={todoItem} />
            </Box>         
         ))}
             {/* {filterData.map(itemB => (
                 <Box sx={{ width: ['100%', '50%', '33.33%'] }}>
                     <TodoItem key={itemB.id} item={itemB} />
                 </Box>
        
          ))} */}
          </Flex>
        </Container>     
      </ThemeProvider>
    
    );
  }

  export default TodoList;