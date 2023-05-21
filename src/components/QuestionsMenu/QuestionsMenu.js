import React, { useContext } from 'react'
import QuestionCard  from '../QuestionCard/QuestionCard'
import { BoardContext } from '../../context/BoardContext'
import modules from './QuestionsMenu.module.css'
const QuestionsMenu = () => {
   const {QuestionsArray} = useContext(BoardContext)
  return (
    <div id={modules.QuestionMenu}>
      {QuestionsArray.map((element)=>{
        return <QuestionCard key={element.id} info={element} ></QuestionCard>

      })}
    </div>
  )
}

export default QuestionsMenu