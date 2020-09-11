import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchQuestions } from "../actions";

const QuestionsList = (props) => {
  // props
  const { loading, score, questions, fetchQuestions } = props;
  const [answer, setAnswer] = useState(null);
  const [currentElement, setCurrentElement] = useState(0);

  // console.log(props);
  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleClick = (e, answers, correctAnswer, index) => {
    e.preventDefault();
    if (answer === null || answers[correctAnswer] !== answer) {
      console.log("wrong answer");
      return;
    }

    index++;
    setCurrentElement(index);
  };

  return loading ? (
    <div>
      <h3>Loading...</h3>
    </div>
  ) : (
    <>
      <h1>Questions List</h1>
      <span className="score">Result: {score}</span>

      {questions.map((question, i) => {
        if (i === currentElement) {
          return (
            <div key={question.id} className="quiz">
              <h2>Question: {question.question}</h2>

              <form>
                {question.answers.map((answer, index) => (
                  <div key={index}>
                    <input
                      name="answer"
                      onChange={handleChange}
                      type="radio"
                      id={`${answer}Id`}
                      value={answer}
                    />
                    <label htmlFor={`${answer}Id`}>{answer}</label>
                  </div>
                ))}
                <input
                  type="submit"
                  value="answer"
                  onClick={(e) =>
                    handleClick(e, question.answers, question.correctAnswer, i)
                  }
                />
              </form>
            </div>
          );
        }
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
