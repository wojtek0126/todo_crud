import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { useState, useEffect } from 'react';
import { filteredTodoListState, inputLengthState, todoListState } from '../../functions/recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import { ThemeProvider, Container, Flex, Box } from 'theme-ui';
import theme from '../../styles/themes/theme';
import { getAllTasks } from '../../API/fetch';
import SearchField from '../atoms/SearchField';
import MediumText from '../atoms/MediumText';
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';
import { todoListTitleTxt, todoListSearchPlaceholderTxt } from '../../content/contentEng';


const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoListState);
    const inputLength = useRecoilValue(inputLengthState);
    const [toSearch, setToSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const taskList = [];
    const [taskText, setTaskText] = useState([]);
    const filteredData =  useRecoilValue(filteredTodoListState);
    

    //decoy for unused searchResults state    
    const decoy = searchResults; 
    
    //dynamic character count
    console.log(inputLength, "dynamic character count"); 
   
    useEffect(() => {
      const getTodos = async () => {
      getAllTasks(setTodos)
      }
     getTodos()  
     //decoy for unused searchResults state    
    //  setTaskList(taskList);
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
        <Flex sx={{           
          backgroundColor: 'boxBackground',
          color: 'text',
          border: '2px solid', 
          borderColor: 'boxBorder',
          borderRadius: 4,
          fontSize: 4,
          margin: 3,
          padding: 3,
          flexDirection: 'column'
        }}><MediumText text={todoListTitleTxt} marginBottom={2} />
        <TodoListFilters />
        <SearchField
          type={"text"}
          placeholder={todoListSearchPlaceholderTxt}
          value={toSearch}
          onChange={handleChange}        
        /></Flex>
        <TodoListStats />  
        <ScrollUpButton />             
        <Flex sx={{ flexWrap: 'wrap' }}>  
          {filterData.map((todoItem) => (
            <Box key={todoItem.id} sx={{ width: ['100%'] }}>
              <TodoItem item={todoItem} todos={todos} />
            </Box>         
         ))}
          </Flex>
        </Container>     
      </ThemeProvider>    
    );
  }


  export default TodoList;