/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useState } from 'react'
import { textInputState, todoListState } from '../../functions/recoil'
import ButtonPrimary from '../atoms/ButtonPrimary'
import { addTask } from '../../API/fetch'
import MediumText from '../atoms/MediumText'
import ButtonWithlink from '../atoms/ButtonWithLink'
import TextArea from '../atoms/TextArea'
import { timeStampFormatted } from '../../functions/functionStorage'
import {
  openMenuBtnIcon,
  addTaskBtnIcon,
  goBackBtnIcon,
} from '../../content/icons'
import {
  todoCreatorTitleTxt,
  todoCreatorPlaceholderTxt,
  todoCreatorNotUpdatedYetTxt,
} from '../../content/contentEng'
import {
  buttonBackgroundType2,
  buttonBackgroundType3,
  buttonBackgroundType4,
  taskBackground,
} from '../../styles/gradients'
import { bulbOff, bulbOn, off, on } from '../../variables/settings'
import CreateWrapper from '../containers/CreateWrapper'
import CreateButtonsWrapper from '../containers/CreateButtonsWrapper'
import { userId } from '../../API/variables'

const TodoItemCreator = () => {
  //for display control
  const [creatorBtnMenu, setCreatorBtnMenu] = useState(on)
  const [creatorBtnAdd, setCreatorBtnAdd] = useState(off)
  const [creatorBtnBack, setCreatorBtnBack] = useState(off)
  const [creatorBtnMenuLight, setCreatorBtnMenuLight] = useState(bulbOff)
  //
  const [textareaDisplay, setTextareaDisplay] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  const setInput = useSetRecoilState(textInputState)
  const getInput = useRecoilValue(textInputState)

  //add new task handle
  const addItem = (title) => {
    const todoData = {
      id: getId(),
      user_id: userId,
      title: title,
      completed: false,
      created_at: timeStampFormatted(),
      updated_at: todoCreatorNotUpdatedYetTxt,
    }

    // no empty input validator
    if (todoData.title.length > 0) {
      setTodoList((oldTodoList) => [...oldTodoList, todoData])
      setInput('')
      addTask(todoData)
      setTextareaDisplay('')
    }
  }

  // taking input value for task from textarea
  const handleonChange = ({ target: { value } }) => {
    setTimeout(() => {
      setTextareaDisplay(value)
    }, 0)
  }

  // onblur
  const handleonBlur = () => {
    setTimeout(() => {
      setInput(textareaDisplay)
    }, 0)
  }

  // display control function
  const displayControlCreateTask = (setBtnMenu, setBtnAdd, setBtnBack) => {
    setCreatorBtnMenu(setBtnMenu)
    setCreatorBtnAdd(setBtnAdd)
    setCreatorBtnBack(setBtnBack)
  }

  // popup menu control
  const handleTaskMenuOpenCloseBtn = () => {
    displayControlCreateTask(on, off, off)
    setTimeout(() => {
      if (creatorBtnAdd === 'none') {
        displayControlCreateTask(on, on, on)
        setCreatorBtnMenuLight(bulbOn)
      } else {
        setCreatorBtnMenuLight(bulbOff)
      }
    }, 10)
  }

  return (
    <CreateWrapper
      contentArea={
        <>
          <MediumText text={todoCreatorTitleTxt} marginBottom={2} />
          <TextArea
            textareaBorderFocusColor={'inputBorderFocus'}
            value={textareaDisplay}
            onBlur={handleonBlur}
            onChange={handleonChange}
            backgroundColor={`inputBackground`}
            placeholder={todoCreatorPlaceholderTxt}
          />
          <CreateButtonsWrapper
            contentArea={
              <>
                <ButtonPrimary
                  text={openMenuBtnIcon}
                  onClick={handleTaskMenuOpenCloseBtn}
                  color={creatorBtnMenuLight}
                  backgroundColor={buttonBackgroundType4}
                  displayIt={creatorBtnMenu}
                />
                <ButtonPrimary
                  onClick={() => addItem(getInput)}
                  text={addTaskBtnIcon}
                  backgroundColor={buttonBackgroundType2}
                  displayIt={creatorBtnAdd}
                />
                <ButtonWithlink
                  to={`home`}
                  text={goBackBtnIcon}
                  backgroundColor={buttonBackgroundType3}
                  displayIt={creatorBtnBack}
                />
              </>
            }
          />
        </>
      }
    />
  )
}

// utility for creating unique Id
let id = 0
const getId = () => {
  return id++
}

export default TodoItemCreator
