/* eslint-disable */

import { getAllTasks } from "../API/fetch"

// switch button text on click 
export const switchBtnTxt = (setUpdateState, text1, text2, delay = 1800) => {
  setUpdateState(text2)
  setTimeout(() => {
    setUpdateState(text1)
  }, delay)
}

// formatted current date and time, for create and edit tasks
export const timeStampFormatted = () => {
  const timestamp = Date.now() // This would be the timestamp you want to format
  const formatted = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(timestamp)
  return formatted
}

// title screen stats from API not recoil state
export const nonRecoilStats = (list) => {
  const todoList = list
  const totalNumTitleScrn = todoList.length
  const totalCompletedNumTitleScrn = todoList.filter(
    (item) => item.completed,
  ).length
  const totalUncompletedNumTitleScrn =
    totalNumTitleScrn - totalCompletedNumTitleScrn
  const percentCompletedTitleScrn =
    totalNumTitleScrn === 0
      ? 0
      : (totalCompletedNumTitleScrn / totalNumTitleScrn) * 100
  const percentRound = Math.round(percentCompletedTitleScrn)
  return {
    totalNumTitleScrn,
    totalCompletedNumTitleScrn,
    totalUncompletedNumTitleScrn,
    percentRound
  }
}

// TodoItem.js functions
export const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

export const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

//switches display state on/off
export const switchDisplayStateOnOff = (setDisplay, onOff) => {
  setDisplay(onOff);  
}

  // onblur to handle input lag
  export const handleOnBlur = (setInput, value, timeout = 0) => {
    setTimeout(() => {
      setInput(value)
    }, timeout)
  }

  // on change value handler
  export const handleOnChangeTargetValue = (setTargetState) => ({ target: { value } }) => {
    setTimeout(() => {    
        setTargetState(value)      
    }, 0)
  }

    // on change value handler with two states output
    export const handleOnChangeDoubleOutput = (setTargetState1, setTargetState2) => ({ target: { value } }) => {
      setTimeout(() => {    
          setTargetState1(value)
          setTargetState2(value)      
      }, 0)
    }

  //get all tasks and set state with them
  export const getTodos = async (setTodos) => {
    getAllTasks(setTodos)
  }

  // switch target on off
  export const handleOnOffOnClick = (myTarget, setIt, on, off) => {
    if (myTarget === on) {
      setIt(off)
    } else {
      setIt(on)
    }
  }

// ThoughtBoard.js functions
export const handleClickSaveToLocal = (localKey, localValue, inputValue) => {
  // no empty content - validator
  if (inputValue === '' || inputValue === null || inputValue === undefined) {
  } else {
    localStorage.setItem(localKey, localValue)
  }
}

export const handleClickClearLocal = (setBoardText) => {
  // if (inputValue === '' || inputValue === null || inputValue === undefined) {
  // } else {
    localStorage.clear()
    setTimeout(() => {
      setBoardText('')
    })
  // }
}



