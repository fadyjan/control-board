import React, { useContext } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { BoardContext } from "../../context/BoardContext";
import modules from "./QuestionsMenu.module.css";
import SubmitWrapper from "../SubmitWrapper/SubmitWrapper";
const QuestionsMenu = () => {
  const { QuestionsArray } = useContext(BoardContext);
  return (
    <div id={modules.QuestionMenu}>
      <div id={modules.QuestionsCardsWrapper}>
        {QuestionsArray.map((element) => {
          return <QuestionCard key={element.id} info={element}></QuestionCard>;
        })}
      </div>
      <div>
        <SubmitWrapper></SubmitWrapper>
      </div>
    </div>
  );
};

export default QuestionsMenu;
