/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { useState, useEffect } from 'react'
import { textInputState, todoListState } from '../../functions/recoil'
import ButtonPrimary from '../atoms/ButtonPrimary'
import { deleteTask, updateTask } from '../../API/fetch'
import MediumText from '../atoms/MediumText'
import BigText from '../atoms/BigText'
import TextArea from '../atoms/TextArea'
import { 
  replaceItemAtIndex,
  removeItemAtIndex,
  timeStampFormatted,
  switchDisplayStateOnOff,
  handleOnBlur
} from '../../functions/functionStorage'
import YesNoPopup from '../molecules/YesNoPopup'
import TaskDetails from './TaskDetails'
import ButtonsWrapper from '../containers/ButtonsWrapper'
import {
  openMenuBtnIcon,
  detailsBtnIcon,
  editBtnIcon,
  statusBtnIcon,
  deleteBtnIcon,
  declineBtnIcon,
  confirmBtnIcon,
} from '../../content/icons'
import {
  buttonBackgroundType1,
  buttonBackgroundType2,
  buttonBackgroundType3,
  buttonBackgroundType4,
} from '../../styles/gradients'
import {
  deleteYesNoMessage,
  editYesNoMessage,
  statusYesNoMessage,
  taskNumberText,
  todoItemStatusCompletedText,
  todoItemStatusInProgressText  
} from '../../content/contentEng'
import { bulbOff, bulbOn, off, on } from '../../variables/variablesStorage'
import ItemWrapper from '../containers/ItemWrapper'
import ItemStatusWrapper from '../containers/ItemStatusWrapper'
import ItemButtonsWrapper from '../containers/ItemButtonsWrapper'

const TodoItem = ({ item }) => {
  // init data
  const initialTitleDisplay = item.title
  const todoItemPrevious = item

  // takes whole list from recoilState
  const [todoList, setTodoList] = useRecoilState(todoListState)
  // index finder
  const index = todoList.findIndex((listItem) => listItem === item)
  // initial and updated task data
  const [initTaskData, setInitTaskData] = useState(item)
  const [updatedData, setUpdatedData] = useState(todoItemPrevious)
  // toggle textarea enabled or disabled
  const [disabled, setDisabled] = useState(true)
  // textarea
  const [textareaDisplay, setTextareaDisplay] = useState(initialTitleDisplay)
  // buttons active or not
  const [taskBtnMenu, setTaskBtnMenu] = useState(on)
  const [taskBtnEdit, setTaskBtnEdit] = useState(off)
  const [taskBtnStatus, setTaskBtnStatus] = useState(off)
  const [taskBtnDelete, setTaskBtnDelete] = useState(off)
  const [taskBtnDetails, setTaskBtnDetails] = useState(off)
  const [taskBtnMenuLight, setTaskBtnMenuLight] = useState(bulbOff)
  // yes no popups active or not
  const [yesNoEditPopup, setYesNoEditPopup] = useState(off)
  const [yesNoDeletePopup, setYesNoDeletePopup] = useState(off)
  const [yesNoStatusPopup, setYesNoStatusPopup] = useState(off)
  // views active or not
  const [taskDetailView, setTaskDetailView] = useState(off)
  const [taskStatusView, setTaskStatusView] = useState(on)
  // set border color for textarea when edited or not
  const [textareaBorderColor, setTextareaBorderColor] = useState('inputBorder')
  const [textareaBorderFocusColor, setTextareaBorderFocusColor] =
    useState('inputBorder')
  // set dynamic character count
  const setInput = useSetRecoilState(textInputState)
 

  // data to retrieve initial input if edit cancelled
  useEffect(() => {
    const todoDataInit = {
      id: item.id,
      user_id: item.user_id,
      title: item.title,
      completed: item.completed,
      created_at: item.created_at,
      updated_at: item.updated_at,
    }
    setInitTaskData(todoDataInit)
  }, [item])

  // when edit button clicked
  const handleUpdateBtn = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, off)
    switchDisplayStateOnOff(setTaskBtnEdit, off)
    switchDisplayStateOnOff(setTaskBtnDelete, off)
    switchDisplayStateOnOff(setTaskBtnDetails, off)
    switchDisplayStateOnOff(setTaskBtnStatus, off)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, on)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, false)
    switchDisplayStateOnOff(setTaskDetailView,off) 
    setTextareaBorderColor('inputBorderEditon')
    setTextareaBorderFocusColor('inputBorderFocus')
  }

  // when edit cancelled
  const handleUpdateNoBtn = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, on)
    switchDisplayStateOnOff(setTaskBtnEdit, on)
    switchDisplayStateOnOff(setTaskBtnDelete, on)
    switchDisplayStateOnOff(setTaskBtnDetails, on)
    switchDisplayStateOnOff(setTaskBtnStatus, on)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off)
    setTextareaDisplay(todoList[index].title)    
    setTextareaBorderColor('inputBorder')
    setTextareaBorderFocusColor('inputBorder')
    setUpdatedData(initTaskData)
  }

  // edit dynamic content value on change
  const editItemText = ({ target: { value } }) => {
    const todoDataMod = {
      id: item.id,
      user_id: item.user_id,
      title: value,
      completed: item.completed,
      created_at: item.created_at,
      updated_at: timeStampFormatted(),
    }
    setTextareaDisplay(todoDataMod.title)
    setUpdatedData(todoDataMod)
  }

  // commit edit changes on click
  const confirmEditChanges = (todoDataMod) => {
    if (
      updatedData.title === '' ||
      updatedData.title === null ||
      updatedData.title === undefined
    ) {
      setTaskBtnEdit(on)
      setYesNoEditPopup(off)
      setTaskBtnEdit(off)
      setYesNoEditPopup(on)
    } else {
      updateTask(item.id, todoDataMod)
      setInitTaskData(item)
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        title: todoDataMod.title,
        updated_at: timeStampFormatted(),
      })
      setTodoList(newList)
      switchDisplayStateOnOff(setTaskBtnMenu, on)
      switchDisplayStateOnOff(setTaskBtnEdit, on)
      switchDisplayStateOnOff(setTaskBtnDelete, on)
      switchDisplayStateOnOff(setTaskBtnDetails, on)
      switchDisplayStateOnOff(setTaskBtnStatus, on)
      switchDisplayStateOnOff(setYesNoDeletePopup, off)
      switchDisplayStateOnOff(setYesNoEditPopup, off)
      switchDisplayStateOnOff(setYesNoStatusPopup, off)
      switchDisplayStateOnOff(setDisabled, true)
      switchDisplayStateOnOff(setTaskDetailView, off)   
      setTextareaBorderColor('inputBorder')
      setTextareaBorderFocusColor('inputBorder')
    }
  }

  // when change status button clicked
  const handleChangeStatusBtn = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, off)
    switchDisplayStateOnOff(setTaskBtnEdit, off)
    switchDisplayStateOnOff(setTaskBtnDelete,off)
    switchDisplayStateOnOff(setTaskBtnDetails, off)
    switchDisplayStateOnOff(setTaskBtnStatus, off)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, on)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off) 
  }

  // when status changed and answer 'yes' to confirmation question
  const handleStatusChangeConfirm = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, on)
    switchDisplayStateOnOff(setTaskBtnEdit, on)
    switchDisplayStateOnOff(setTaskBtnDelete, on)
    switchDisplayStateOnOff(setTaskBtnDetails, on)
    switchDisplayStateOnOff(setTaskBtnStatus, on)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off)   
    toggleItemCompletion()
  }

  // when status changed and answer 'no' to confirmation question
  const handleStatusChangeDeny = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, on)
    switchDisplayStateOnOff(setTaskBtnEdit, on)
    switchDisplayStateOnOff(setTaskBtnDelete, on)
    switchDisplayStateOnOff(setTaskBtnDetails, on)
    switchDisplayStateOnOff(setTaskBtnStatus, on)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off)   
  }

  // update task comletion status
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
      updated_at: timeStampFormatted(),
    })
    const todoDataModCheck = {
      id: item.id,
      user_id: item.user_id,
      title: item.title,
      completed: !item.completed,
      created_at: item.created_at,
      updated_at: timeStampFormatted(),
    }
    updateTask(item.id, todoDataModCheck)
    setTodoList(newList)
    setUpdatedData(todoDataModCheck)
  }

  // delete item on click, assigned to delete popup 'confirm' button
  const deleteItem = () => {
    deleteTask(item.id)
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
    switchDisplayStateOnOff(setTaskBtnMenu, on)
    switchDisplayStateOnOff(setTaskBtnEdit, on)
    switchDisplayStateOnOff(setTaskBtnDelete, on)
    switchDisplayStateOnOff(setTaskBtnDetails, on)
    switchDisplayStateOnOff(setTaskBtnStatus, on)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off)
  }

  // after clicking delete button
  const handleDeleteBtnClick = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, off)
    switchDisplayStateOnOff(setTaskBtnEdit, off)
    switchDisplayStateOnOff(setTaskBtnDelete, off)
    switchDisplayStateOnOff(setTaskBtnDetails, off)
    switchDisplayStateOnOff(setTaskBtnStatus, off)
    switchDisplayStateOnOff(setYesNoDeletePopup, on)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off) 
  }

  // after clicking delete confirm button
  const handleDeleteBtnYesClick = () => {
    deleteItem()
  }

  // after clicking delete no - 'go back' button
  const handleDeleteBtnNoClick = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, on)
    switchDisplayStateOnOff(setTaskBtnEdit, on)
    switchDisplayStateOnOff(setTaskBtnDelete, on)
    switchDisplayStateOnOff(setTaskBtnDetails, on)
    switchDisplayStateOnOff(setTaskBtnStatus, on)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off)  
  }

  // after clicking show details
  const handleShowDetailsBtn = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, off)
    switchDisplayStateOnOff(setTaskBtnEdit, off)
    switchDisplayStateOnOff(setTaskBtnDelete, off)
    switchDisplayStateOnOff(setTaskBtnDetails, off)
    switchDisplayStateOnOff(setTaskBtnStatus, off)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, on)
    switchDisplayStateOnOff(setTaskStatusView, off)  
  }

  // after clicking close details
  const handleCloseDetailsBtn = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, on)
    switchDisplayStateOnOff(setTaskBtnEdit, on)
    switchDisplayStateOnOff(setTaskBtnDelete, on)
    switchDisplayStateOnOff(setTaskBtnDetails, on)
    switchDisplayStateOnOff(setTaskBtnStatus, on)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off)
    switchDisplayStateOnOff(setTaskStatusView, on)
  }

  // item completed/in progress to display
  const itemStatusDisplay = (completedData) => {
    if (completedData === true) {
      return todoItemStatusCompletedText
    } else {
      return todoItemStatusInProgressText
    }
  }

  // popup menu control
  const handleTaskMenuOpenCloseBtn = () => {
    switchDisplayStateOnOff(setTaskBtnMenu, on)
    switchDisplayStateOnOff(setTaskBtnEdit, off)
    switchDisplayStateOnOff(setTaskBtnDelete, off)
    switchDisplayStateOnOff(setTaskBtnDetails, off)
    switchDisplayStateOnOff(setTaskBtnStatus, off)
    switchDisplayStateOnOff(setYesNoDeletePopup, off)
    switchDisplayStateOnOff(setYesNoEditPopup, off)
    switchDisplayStateOnOff(setYesNoStatusPopup, off)
    switchDisplayStateOnOff(setDisabled, true)
    switchDisplayStateOnOff(setTaskDetailView, off)
   
    setTimeout(() => {
      if (taskBtnEdit === 'none') {
        switchDisplayStateOnOff(setTaskBtnMenu, on)
        switchDisplayStateOnOff(setTaskBtnEdit, on)
        switchDisplayStateOnOff(setTaskBtnDelete, on)
        switchDisplayStateOnOff(setTaskBtnDetails, on)
        switchDisplayStateOnOff(setTaskBtnStatus, on)
        switchDisplayStateOnOff(setYesNoDeletePopup, off)
        switchDisplayStateOnOff(setYesNoEditPopup, off)
        switchDisplayStateOnOff(setYesNoStatusPopup, off)
        switchDisplayStateOnOff(setDisabled, true)
        switchDisplayStateOnOff(setTaskDetailView, off)     
        setTaskBtnMenuLight(bulbOn)
      } else {
        setTaskBtnMenuLight(bulbOff)
      }
    }, 10)
  }

  return (
    <ItemWrapper
      contentArea={
        <>
          <BigText text={`${taskNumberText} # ${item.id}:`} marginBottom={2} />
          {/* display with task title*/}
          <TextArea
            disabled={disabled}
            value={textareaDisplay}
            onBlur={() => handleOnBlur(setInput, textareaDisplay)}
            textareaBorderColor={textareaBorderColor}
            textareaBorderFocusColor={textareaBorderFocusColor}
            onChange={editItemText}
            backgroundColor={`inputBackground`}
          />
          <ItemStatusWrapper
            contentArea={
              <MediumText
                text={itemStatusDisplay(item.completed)}
                display={taskStatusView}
              />
            }
          />
          <ItemButtonsWrapper
            contentArea={
              <>
                {/* open close task options */}
                <ButtonPrimary
                  text={openMenuBtnIcon}
                  onClick={handleTaskMenuOpenCloseBtn}
                  color={taskBtnMenuLight}
                  backgroundColor={buttonBackgroundType4}
                  displayIt={taskBtnMenu}
                />
                {/* show details button */}
                <ButtonPrimary
                  onClick={handleShowDetailsBtn}
                  displayIt={taskBtnDetails}
                  text={detailsBtnIcon}
                  backgroundColor={buttonBackgroundType1}
                />
                {/* update task button */}
                <ButtonPrimary
                  onClick={handleUpdateBtn}
                  displayIt={taskBtnEdit}
                  text={editBtnIcon}
                  backgroundColor={buttonBackgroundType2}
                />
                {/* change status button*/}
                <ButtonPrimary
                  onClick={handleChangeStatusBtn}
                  displayIt={taskBtnStatus}
                  text={statusBtnIcon}
                  backgroundColor={buttonBackgroundType2}
                />
                {/* delete button*/}
                <ButtonPrimary
                  onClick={handleDeleteBtnClick}
                  displayIt={taskBtnDelete}
                  text={deleteBtnIcon}
                  backgroundColor={buttonBackgroundType3}
                />
              </>
            }
          />
          {/* popup with choices yes or no for editing*/}
          <ButtonsWrapper
            displayStyle={yesNoEditPopup}
            contentArea={
              <YesNoPopup
                onClickYes={() => confirmEditChanges(updatedData)}
                onClickNo={handleUpdateNoBtn}
                yesText={confirmBtnIcon}
                noText={declineBtnIcon}
                messageText={editYesNoMessage}
              />
            }
          />
          {/* popup with choices yes or no for delete*/}
          <ButtonsWrapper
            displayStyle={yesNoDeletePopup}
            contentArea={
              <YesNoPopup
                onClickYes={handleDeleteBtnYesClick}
                onClickNo={handleDeleteBtnNoClick}
                yesText={confirmBtnIcon}
                noText={declineBtnIcon}
                messageText={deleteYesNoMessage}
              />
            }
          />
          {/* popup with choices yes or no for changing status*/}
          <ButtonsWrapper
            displayStyle={yesNoStatusPopup}
            contentArea={
              <YesNoPopup
                onClickYes={handleStatusChangeConfirm}
                onClickNo={handleStatusChangeDeny}
                yesText={confirmBtnIcon}
                noText={declineBtnIcon}
                messageText={statusYesNoMessage}
              />
            }
          />
          <TaskDetails
            displayIt={taskDetailView}
            taskData={updatedData}
            clickClose={handleCloseDetailsBtn}
          />
        </>
      }
    />
  )
}


export default TodoItem
