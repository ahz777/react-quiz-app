export default function StartPage({ onClick }) {
  return (
    <div className="start-page">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={onClick}>Start Quiz</button>
    </div>
  );
}
