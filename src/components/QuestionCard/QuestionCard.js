import React, { useContext } from 'react'
import { BoardContext } from '../../context/BoardContext'
import modules from './Question.module.css'
const QuestionCard = (props) => {
    const {handleSelectedQuestion} = useContext(BoardContext)
  return (
    <div className={modules.QuestionCardWrapper +" Card"} onClick={()=>handleSelectedQuestion(props.info)} id={props.info.id +"_Div"}>
    <label>{props.info.name}</label>
  </div>
  )
}

export default QuestionCard