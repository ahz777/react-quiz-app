import { useState } from "react";
import StartPage from "./Components/StartPage";
import QuizPage from "./Components/QuizPage";
function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  function handleStartQuiz() {
    setStartQuiz(true);
  }
  return (
    <>{startQuiz ? <QuizPage /> : <StartPage onStart={handleStartQuiz} />}</>
  );
}

export default App;
