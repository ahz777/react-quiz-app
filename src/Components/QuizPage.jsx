import { useState, useEffect } from "react";
import { decode } from "html-entities";
import Question from "./Question";

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  function fetchQuestions() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => {
        if (!res.ok) throw new Error("Response not ok!" + res.statusText);
        return res.json();
      })
      .then((data) => {
        const formatted_questions = data.results.map((item, index) => {
          const answers = [...item.incorrect_answers, item.correct_answer];
          const shuffled_answers = [...answers]
            .map((ans) => decode(ans))
            .sort(() => Math.random() - 0.5);
          return {
            id: index,
            correct_answer: decode(item.correct_answer),
            question: decode(item.question),
            answers: shuffled_answers,
            selected_answer: null,
          };
        });
        setQuestions(formatted_questions);
      })
      .catch((err) => {
        console.error("Fetch Error", err);
        setQuestions([]);
        fetchQuestions();
      });
  }
  useEffect(() => {
    fetchQuestions();
  }, []);

  function handleSelectAnswer(answer, question_id) {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question_id ? { ...q, selected_answer: answer } : q
      )
    );
  }

  function handleAnswersCheck() {
    setShowResults(true);
  }

  function handlePlayAgain() {
    setShowResults(false);
    fetchQuestions();
  }

  const score = questions.filter(
    (q) => q.selected_answer === q.correct_answer
  ).length;

  return (
    <div className="quiz-page">
      {questions.map((question) => (
        <Question
          {...question}
          key={question.id}
          handleSelectAnswer={handleSelectAnswer}
          showResults={showResults}
        />
      ))}
      {questions.length > 0 && !showResults && (
        <button
          type="button"
          className="check-btn"
          onClick={handleAnswersCheck}
        >
          Check Answers
        </button>
      )}
      {questions.length > 0 && showResults && (
        <div className="results">
          <p>
            You scored {score}/{questions.length} correct answers
          </p>
          <button
            type="button"
            className="play-again-btn"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      )}
      {questions.length === 0 && (
        <div className="fetching-msg">fetching questions...</div>
      )}
    </div>
  );
}
