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
import theme, { taskBackground } from '../../styles/themes/theme';
import { getAllTasks } from '../../API/fetch';
import SearchField from '../atoms/SearchField';
import MediumText from '../atoms/MediumText';
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';
import { todoListTitleTxt, todoListSearchPlaceholderTxt } from '../../content/contentEng';


const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoListState);
    const inputLength = useRecoilValue(inputLengthState);
    const [toSearch, setToSearch] = useState(""); 
    const filteredData =  useRecoilValue(filteredTodoListState);
    
    
    //dynamic character count with recoil
    console.log(inputLength, "dynamic character count"); 
   
    useEffect(() => {
      const getTodos = async () => {
      getAllTasks(setTodos)
      }
     getTodos()  
   }, [])  
  
   let filterData = filteredData.filter(item => item.title.includes(toSearch));  
 

   const handleOnChange = ({target: {value}}) => {
    setTimeout(() => {
      setToSearch(value);
    },0);    
  };


    return (
      <ThemeProvider theme={theme}>       
        <Container>            
        <TodoItemCreator/>  
        <Flex sx={{           
          // backgroundColor: 'boxBackground',
          background: `${taskBackground}`,
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
          onChange={handleOnChange}        
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