import clsx from "clsx";

export default function Question(props) {
  return (
    <div className="question">
      <h2>{props.question}</h2>
      <div className="answers">
        {props.answers.map((answer, index) => {
          const style = clsx({
            incorrect: props.showResults && answer !== props.correct_answer, // all incorrect answers
            selected: !props.showResults && props.selected_answer === answer, // selected before showing results
            correct: props.showResults && answer === props.correct_answer, // correct answers
            wrong:
              props.showResults &&
              props.selected_answer === answer &&
              answer !== props.correct_answer, // selected and not correct answers
          });
          return (
            <button
              type="button"
              key={index}
              className={style}
              onClick={() =>
                !props.showResults && props.handleSelectAnswer(answer, props.id)
              }
              disabled={props.showResults}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}
