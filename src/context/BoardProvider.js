/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BoardContext } from "./BoardContext";
export const BoardProvider = ({ children }) => {
  const [selectedQuestion, setSelectedQuestion] = useState({
    name: "ISSUE TYPE ?",
    id: 1,
  });
  const QuestionsArray = [
    { name: "ISSUE TYPE ?", id: 1 },
    { name: "RELATING TO WHAT DEPARTMENT", id: 2 },
    { name: "REALATING TO WHICH ", id: 3 },
    { name: "DIRECT TO WHICH", id: 4 },
    { name: "DESCRIPE ISSUE", id: 5 },
  ];

  const DepartmentArray = [
    "Administrative",
    "Finance",
    "Accounting",
    "Sales",
    "Marketing",
    "Logistic",
    "Human Resources",
    "Supplier Security",
  ];

  const CompiniesArray = [
    { src: "/CompanyLogos/CompanyLogo (1).png", name: "TruffBull", id: 1 },
    { src: "/CompanyLogos/CompanyLogo (2).png", name: "Battery", id: 2 },
    { src: "/CompanyLogos/CompanyLogo (3).png", name: "Deye", id: 3 },
    { src: "/CompanyLogos/CompanyLogo (4).png", name: "DuSun", id: 4 },
    { src: "/CompanyLogos/CompanyLogo (5).png", name: "GROWATT", id: 5 },
    { src: "/CompanyLogos/CompanyLogo (6).png", name: "MUST", id: 6 },
    { src: "/CompanyLogos/CompanyLogo (7).png", name: "LUMINOUS", id: 7 },
    { src: "/CompanyLogos/CompanyLogo (8).png", name: "ROCKET", id: 8 },
    { src: "/CompanyLogos/CompanyLogo (9).png", name: "ELECITYSOLAR", id: 9 },
    { src: "/CompanyLogos/CompanyLogo (10).png", name: "SUPERPOWER", id: 10 },
    { src: "/CompanyLogos/CompanyLogo (11).png", name: "RAMBO", id: 11 },
    { src: "/CompanyLogos/CompanyLogo (12).png", name: "ORBIT", id: 12 },
    { src: "/CompanyLogos/CompanyLogo (13).png", name: "LONGI", id: 13 },
    { src: "/CompanyLogos/CompanyLogo (14).png", name: "INKEL", id: 14 },
  ];

  const Avatars = [
    { src: "/Avatars/Avatar (1).png", name: "Monica", id: 1 },
    { src: "/Avatars/Avatar (2).png", name: "Cristina", id: 2 },
    { src: "/Avatars/Avatar (3).png", name: "Olwica", id: 3 },
    { src: "/Avatars/Avatar (4).png", name: "Patricia", id: 4 },
    { src: "/Avatars/Avatar (5).png", name: "Merna", id: 5 },
    { src: "/Avatars/Avatar (6).png", name: "Martha", id: 6 },
    { src: "/Avatars/Avatar (7).png", name: "Nashwa", id: 7 },
    { src: "/Avatars/Avatar (8).png", name: "Eva", id: 8 },
    { src: "/Avatars/Avatar (9).png", name: "alrtlte", id: 9 },
    { src: "/Avatars/Avatar (10).png", name: "Vevian", id: 10 },
  ];

  useEffect(() => {
    let SelectedElement = document.getElementById(selectedQuestion.id +"_Div")
    let AllQuestionDivs =Array.from(document.getElementsByClassName('Card'))
    AllQuestionDivs.forEach((div)=>{
      div.classList.remove('SelectedQuestion')
    }) 
    SelectedElement.classList.add('SelectedQuestion')
  }, [selectedQuestion]);
  function handleSelectedQuestion(key) {
    setSelectedQuestion(key);
  }

  return (
    <BoardContext.Provider
      value={{
        selectedQuestion,
        handleSelectedQuestion,
        QuestionsArray,
        DepartmentArray,
        CompiniesArray,
        Avatars,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
