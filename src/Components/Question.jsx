import clsx from "clsx";

export default function Question(props) {
  return (
    <div className="question">
      <h2>{props.question}</h2>
      <div className="answers">
        {props.answers.map((answer, index) => {
          const style = clsx({
            incorrect: props.showResults && props.selected_answer !== answer,
            selected: !props.showResults && props.selected_answer === answer,
            correct: props.showResults && answer === props.correct_answer,
            wrong:
              props.showResults &&
              props.selected_answer === answer &&
              answer !== props.correct_answer,
          });
          return (
            <button
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
