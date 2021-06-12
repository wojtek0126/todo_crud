/* eslint-disable */
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useState, useEffect } from 'react'
import {
  filteredTodoListState,
  inputLengthState,
  todoListState,
} from '../../functions/recoil'
import TodoItemCreator from './TodoItemCreator'
import TodoListFilters from './TodoListFilters'
import TodoListStats from './TodoListStats'
import { ThemeProvider, Container, Box } from 'theme-ui'
import SearchField from '../atoms/SearchField'
import MediumText from '../atoms/MediumText'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import {
  todoListTitleTxt,
  todoListSearchPlaceholderTxt,
} from '../../content/contentEng'
import theme from '../../styles/themes/theme'
import ListWrapper from '../containers/ListWrapper'
import ItemFilteredWrapper from '../containers/ItemFilteredWrapper'
import TodoItem from './TodoItem'
import { getTodos, handleOnChangeTargetValue } from '../../functions/functionStorage'

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoListState)
  const inputLength = useRecoilValue(inputLengthState)
  const [toSearch, setToSearch] = useState('')
  const filteredData = useRecoilValue(filteredTodoListState)

  // dynamic character count with recoil
  console.log(inputLength, 'dynamic character count')


  useEffect(() => {  
    getTodos(setTodos)
  }, [])

  let filterData = filteredData.filter((item) => item.title.includes(toSearch))

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TodoItemCreator />
        <ListWrapper
          contentArea={
            <>
              <MediumText text={todoListTitleTxt} marginBottom={2} />
              <TodoListFilters />
              <SearchField
                type={'text'}
                placeholder={todoListSearchPlaceholderTxt}
                value={toSearch}
                onChange={handleOnChangeTargetValue(setToSearch)}
              />
            </>
          }
        />
        <TodoListStats />
        <ScrollUpButton />
        <ItemFilteredWrapper
          contentArea={filterData.map((todoItem) => (
            <Box key={todoItem.id} sx={{ width: ['100%'] }}>
              <TodoItem item={todoItem} todos={todos} />
            </Box>
          ))}
        />
      </Container>
    </ThemeProvider>
  )
}

export default TodoList
