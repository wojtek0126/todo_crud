/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { useState } from 'react'
import { jsx } from 'theme-ui'
import ButtonPrimary from '../atoms/ButtonPrimary'
import MediumText from '../atoms/MediumText'
import {
  openMenuBtnIcon,
  saveBtnIcon,
  deleteBtnIcon,
} from '../../content/icons'
import {
  thoughtBoardTitleTxt,
  thoughtForgetBtnTxt,
  thoughtForgottenTxt,
} from '../../content/contentEng'
import TextArea from '../atoms/TextArea'
import { textInputState } from '../../functions/recoil'
import { useSetRecoilState } from 'recoil'
import {
  buttonBackgroundType2,
  buttonBackgroundType3,
  buttonBackgroundType4,
} from '../../styles/gradients'
import { bulbOff, bulbOn, off, on } from '../../variables/settings'
import ThoughtBoardWrapper from '../containers/ThoughtBoardWrapper'
import ThoughtButtonsWrapper from '../containers/ThoughtButtonsWrapper'

const ThoughtBoard = () => {
  const boardTxtFromLocal = localStorage.getItem('notes')
  // for display control
  const [boardBtnMenu, setBoardrBtnMenu] = useState(on)
  const [boardBtnAdd, setBoardBtnAdd] = useState(off)
  const [boardBtnDelete, setBoardBtnDelete] = useState(off)
  const [boardBtnMenuLight, setBoardBtnMenuLight] = useState(bulbOff)
  const [boardText, setBoardText] = useState(boardTxtFromLocal)
  const setInput = useSetRecoilState(textInputState)

  const handleOnChange = ({ target: { value } }) => {
    setBoardText(value)
    setInput(value)
  }

  const handleClickSaveToLocal = (localKey, localValue, inputValue) => {
    // no empty content - validator
    if (inputValue === '' || inputValue === null || inputValue === undefined) {
    } else {
      localStorage.setItem(localKey, localValue)
    }
  }

  const handleClickClearLocal = (inputValue) => {
    if (inputValue === '' || inputValue === null || inputValue === undefined) {
    } else {
      localStorage.clear()
      setTimeout(() => {
        setBoardText('')
      })
    }
  }

  // display control function
  const displayControlBoard = (setBtnMenu, setBtnAdd, setBtnDel) => {
    setBoardrBtnMenu(setBtnMenu)
    setBoardBtnAdd(setBtnAdd)
    setBoardBtnDelete(setBtnDel)
  }

  // popup menu control
  const handleBoardOpenCloseBtn = () => {
    displayControlBoard(on, off, off)
    setTimeout(() => {
      if (boardBtnAdd === 'none') {
        displayControlBoard(on, on, on)
        setBoardBtnMenuLight(bulbOn)
      } else {
        setBoardBtnMenuLight(bulbOff)
      }
    }, 10)
  }

  return (
    <ThoughtBoardWrapper
      contentArea={
        <>
          <MediumText text={thoughtBoardTitleTxt} marginBottom={2} />
          <TextArea
            value={boardText}
            textareaBorderFocusColor={'inputBorderFocus'}
            onChange={handleOnChange}
          />
          <ThoughtButtonsWrapper
            contentArea={
              <>
                <ButtonPrimary
                  text={openMenuBtnIcon}
                  onClick={handleBoardOpenCloseBtn}
                  color={boardBtnMenuLight}
                  backgroundColor={buttonBackgroundType4}
                  displayIt={boardBtnMenu}
                />
                <ButtonPrimary
                  text={saveBtnIcon}
                  backgroundColor={buttonBackgroundType2}
                  onClick={() =>
                    handleClickSaveToLocal('notes', boardText, boardText)
                  }
                  displayIt={boardBtnAdd}
                />
                <ButtonPrimary
                  text={deleteBtnIcon}
                  backgroundColor={buttonBackgroundType3}
                  onClick={() =>
                    handleClickClearLocal(
                      thoughtForgottenTxt,
                      thoughtForgetBtnTxt,
                      boardText,
                    )
                  }
                  displayIt={boardBtnDelete}
                />
              </>
            }
          />
        </>
      }
    />
  )
}

export default ThoughtBoard
