import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Stats from "./Stats";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secsLeft: 420,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const currentQuestion = state.questions[state.index];
      const correctOption = currentQuestion.correctOption;
      const currentQuestionPoint = currentQuestion.points;

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctOption
            ? state.points + currentQuestionPoint
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return {
        ...state,
        index: 0,
        answer: null,
        status: "active",
        points: 0,
        secsLeft: 420,
      };
    case "tick":
      return {
        ...state,
        secsLeft: state.secsLeft - 1,
        status: state.secsLeft <= 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { status, questions, index, answer, points, secsLeft } = state;

  const numQuestions = questions.length;

  let sumPoints = 0;
  questions.forEach((question) => (sumPoints += question.points));

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Stats
              points={points}
              index={index}
              numQuestions={numQuestions}
              sumPoints={sumPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Timer dispatch={dispatch} secsLeft={secsLeft} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            sumPoints={sumPoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
