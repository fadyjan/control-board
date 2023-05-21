import React, { useContext } from 'react'
import { BoardContext } from '../../context/BoardContext'
import modules from './Question.module.css'
const QuestionCard = (props) => {
    const {handleSelectedQuestion} = useContext(BoardContext)
  return (
    <div className={modules.QuestionCardWrapper} onClick={()=>handleSelectedQuestion(props.info)}>
    <label>{props.info.name}</label>
  </div>
  )
}

export default QuestionCard