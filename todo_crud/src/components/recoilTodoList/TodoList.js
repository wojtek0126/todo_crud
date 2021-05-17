import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { filteredTodoListState } from '../../functions/recoil';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import { jsx, ThemeProvider, Container, Flex, Box } from 'theme-ui';
import theme from '../../styles/theme';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
   
  
    return (
      <ThemeProvider theme={theme}>       
        <Container>      
        <TodoListStats /> 
        <TodoListFilters />
        <TodoItemCreator/>       
        <Flex sx={{ flexWrap: 'wrap' }}>  
          {todoList.map((todoItem) => (
            <Box sx={{ width: ['100%', '50%', '33.33%'] }}>
              <TodoItem key={todoItem.id} item={todoItem} />
            </Box>         
         ))}
          </Flex>
        </Container>     
      </ThemeProvider>
    
    );
  }

  export default TodoList;