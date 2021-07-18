/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import ButtonPrimary from '../atoms/ButtonPrimary'
import TaskDetailsWrapper from '../containers/TaskDetailsWrapper'
import {
  taskDetailsTaskNumberTxt,
  taskDetailsTaskContentTxt,
  taskDetailsStatusTxt,
  taskDetailsTimeStartedTxt,
  taskDetailsTimeUpdatedTxt,
  taskDetailsInProgressTxt,
  taskDetailsCompletedTxt,
} from '../../content/contentEng'
import { hideDetailsBtnIcon } from '../../content/icons'
import DisplayDetailsText from '../atoms/DisplayDetailsText'
import TaskDetailBtnWrapper from '../containers/TaskDetailBtnWrapper'
import {
  buttonBackgroundType3,
  taskDetailsDetailBackground,
} from '../../styles/gradients'

const TaskDetails = ({ clickClose, displayIt = 'flex', taskData, height }) => {
  let getTask = taskData
  const updated = getTask.updated_at
  let updateDisplay = ""

  // convert task completion status from true/false to success/in progress text
  let completionText = ''
  if (getTask.completed === true) {
    completionText = taskDetailsCompletedTxt
  } else {
    completionText = taskDetailsInProgressTxt
  }

  if (updated === undefined) {
    updateDisplay = "Not updated yet"
  }
  else {
    updateDisplay = updated
  }

  setTimeout(() => {
    console.log(getTask)

  }, 1000)

  return (
    <TaskDetailsWrapper
      height={height}
      displayIt={displayIt}
      contentArea={
        <>
          <DisplayDetailsText
            displayIt={displayIt}
            headText={taskDetailsTaskNumberTxt}
            contentText={getTask.id}
            marginTop={1}
            marginBottom={1}
            backgroundColor={taskDetailsDetailBackground}
          />
          <DisplayDetailsText
            displayIt={displayIt}
            headText={taskDetailsTaskContentTxt}
            contentText={getTask.title}
            marginTop={2}
            marginBottom={2}
            backgroundColor={taskDetailsDetailBackground}
          />
          <DisplayDetailsText
            displayIt={displayIt}
            headText={taskDetailsStatusTxt}
            contentText={completionText}
            marginTop={2}
            marginBottom={2}
            backgroundColor={taskDetailsDetailBackground}
          />
          <DisplayDetailsText
            displayIt={displayIt}
            headText={taskDetailsTimeStartedTxt}
            contentText={getTask.due_on}
            marginTop={2}
            marginBottom={2}
            backgroundColor={taskDetailsDetailBackground}
          />
          <DisplayDetailsText
            displayIt={displayIt}
            headText={taskDetailsTimeUpdatedTxt}
            contentText={updateDisplay}
            marginTop={2}
            marginBottom={2}
            backgroundColor={taskDetailsDetailBackground}
          />
          <TaskDetailBtnWrapper
            displayIt={displayIt}
            contentArea={
              <ButtonPrimary
                text={hideDetailsBtnIcon}
                backgroundColor={buttonBackgroundType3}
                onClick={clickClose}
                marginTop={1}
                marginBottom={1}
              />
            }
          />
        </>
      }
    />
  )
}

export default TaskDetails
