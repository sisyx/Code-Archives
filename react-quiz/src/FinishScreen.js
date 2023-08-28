function FinishScreen({ dispatch, points, sumPoints }) {
  const percentage = 100 * (points / sumPoints);

  return (
    <>
      <p className="result">
        You Scored {points} of {sumPoints} ({Math.ceil(percentage)}%)
      </p>

      <button
        className="btn btn-ui"
        onClick={(event) => dispatch({ type: "restart" })}
      >
        ReStart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
