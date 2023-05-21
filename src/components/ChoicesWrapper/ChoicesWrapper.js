import React, { useContext } from 'react'
import { BoardContext } from '../../context/BoardContext'
import { IssueType } from '../IssueType/IssueType'
import DepartmentWrapper from '../DepartmentWrapper/DepartmentWrapper'
import modules from './ChoicesWrapper.module.css'
import CompanyWrapper from '../CompanyWrapper/CompanyWrapper'
import IssueDescription from '../IssueDescription/IssueDescription'
import SendToWrapper from '../SendToWrapper/SendToWrapper'
const ChoicesWrapper = () => {
    const {selectedQuestion} = useContext(BoardContext)
     function HandleChoicesWrapper(){
        if (selectedQuestion.id === 1) {
            return(
                <IssueType></IssueType>
            )
        } else if(selectedQuestion.id === 2){
            return(
                <DepartmentWrapper></DepartmentWrapper>
            )
        }  else if(selectedQuestion.id === 3){
            return(
                <CompanyWrapper></CompanyWrapper>
            )
        } else if(selectedQuestion.id === 4){
            return (
                <SendToWrapper></SendToWrapper>
            )

        } else if(selectedQuestion.id === 5){
           return(<IssueDescription></IssueDescription>) 
        }
    }
  return (
    <div id={modules.AnswersMenu}>{HandleChoicesWrapper()}</div>
  )
}

export default ChoicesWrapper