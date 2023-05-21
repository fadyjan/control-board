import "./App.css";
import { BoardProvider } from "./context/BoardProvider";
import QuestionsMenu from './components/QuestionsMenu/QuestionsMenu'
import ChoicesWrapper from './components/ChoicesWrapper/ChoicesWrapper'
function App() {
  return (
    <BoardProvider>

      <div id="Wrapper">
        <QuestionsMenu></QuestionsMenu>
        <ChoicesWrapper></ChoicesWrapper>
      </div>
    </BoardProvider>
  );
}

export default App;
