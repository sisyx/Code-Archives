function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  else if (index + 1 < numQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={(event) => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  else
    return (
      <button
        className="btn btn-ui"
        onClick={(event) => dispatch({ type: "finish" })}
      >
        FINISH
      </button>
    );
}

export default NextButton;
