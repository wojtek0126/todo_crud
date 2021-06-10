/* eslint-disable */
// switch button text, add it to onClick handler for buttons,
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
  return {
    totalNumTitleScrn,
    totalCompletedNumTitleScrn,
    totalUncompletedNumTitleScrn,
    percentCompletedTitleScrn,
  }
}

// TodoItem.js functions
export const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

export const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

// ThoughtBoard.js functions
export const handleOnChange = (
  { target: { value } },
  setBoardText,
  setInput,
) => {
  setBoardText(value)
  setInput(value)
}

export const handleClickSaveToLocal = (localKey, localValue, inputValue) => {
  // no empty content - validator
  if (inputValue === '' || inputValue === null || inputValue === undefined) {
  } else {
    localStorage.setItem(localKey, localValue)
  }
}

export const handleClickClearLocal = (inputValue, setBoardText) => {
  if (inputValue === '' || inputValue === null || inputValue === undefined) {
  } else {
    localStorage.clear()
    setTimeout(() => {
      setBoardText('')
    })
  }
}

// display control function
export const displayControlBoard = (
  setBtnMenu,
  setBtnAdd,
  setBtnDel,
  setBoardrBtnMenu,
  setBoardBtnAdd,
  setBoardBtnDelete,
) => {
  setBoardrBtnMenu(setBtnMenu)
  setBoardBtnAdd(setBtnAdd)
  setBoardBtnDelete(setBtnDel)
}

// popup menu control
export const handleBoardOpenCloseBtn = (
  set1,
  set2,
  set3,
  boardBtnAdd,
  set4,
  set5,
  set6,
  setBoardBtnMenuLight,
  bulbSet1,
  bulbSet2,
) => {
  displayControlBoard(set1, set2, set3)
  setTimeout(() => {
    if (boardBtnAdd === 'none') {
      displayControlBoard(set4, set5, set6)
      setBoardBtnMenuLight(bulbSet1)
    } else {
      setBoardBtnMenuLight(bulbSet2)
    }
  }, 10)
}
