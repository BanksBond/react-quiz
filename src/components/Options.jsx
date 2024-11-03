/* eslint-disable react/prop-types */
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((op, index) => (
        <button
          key={op}
          className={`btn btn-option ${answer === index ? "answer" : ""} 
          ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {op}
        </button>
      ))}
    </div>
  );
}

export default Options;
