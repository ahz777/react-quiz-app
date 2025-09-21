export default function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button type="button" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}
