function Stats({ numQuestions, index, points, answer, sumPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>question {`${index + 1} of ${numQuestions}`}</p>
      <p>points: {`${points} of ${sumPoints}`}</p>
    </header>
  );
}

export default Stats;
