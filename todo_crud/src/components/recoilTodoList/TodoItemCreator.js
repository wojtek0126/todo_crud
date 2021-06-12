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
import { handleOnChangeTargetValue, switchDisplayStateOnOff, timeStampFormatted } from '../../functions/functionStorage'
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
} from '../../styles/gradients'
import { bulbOff, bulbOn, off, on } from '../../variables/variablesStorage'
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

  // onblur handler to avoid input lag, so far could not move it to functionStorage.js only works without import here??
  const handleOnBlur = () => {
    setTimeout(() => {
      setInput(textareaDisplay)
    }, 0)
  }  

  // popup menu control
  const handleTaskMenuOpenCloseBtn = () => {
    switchDisplayStateOnOff(setCreatorBtnMenu, on)
    switchDisplayStateOnOff(setCreatorBtnAdd, off)
    setCreatorBtnBack(setCreatorBtnMenu, off)

    setTimeout(() => {
      if (creatorBtnAdd === 'none') {
        switchDisplayStateOnOff(setCreatorBtnMenu, on)
        switchDisplayStateOnOff(setCreatorBtnAdd, on)
        setCreatorBtnBack(setCreatorBtnMenu, on)
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
            onBlur={handleOnBlur}
            onChange={handleOnChangeTargetValue(setTextareaDisplay)}
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
