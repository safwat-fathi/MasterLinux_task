import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchQuestions } from "../actions";

const QuestionsList = (props) => {
  // props
  const { loading, questions, fetchQuestions } = props;
  const [answer, setAnswer] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");
  console.log(props);
  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleClick = (e, answers, correctAnswer) => {
    e.preventDefault();

    if (answer === null || answers[correctAnswer] !== answer) {
      setMsgColor("red");
      setFeedbackMsg("Please choose a correct answer");
      return;
    }

    setMsgColor("green");
    setFeedbackMsg("Correct choice");
  };

  return loading ? (
    <div>
      <h3>Loading...</h3>
    </div>
  ) : (
    <>
      <h1>Questions</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
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
            <p style={{ color: `${msgColor}`, fontWeight: "bold" }}>
              {feedbackMsg}
            </p>
            <input
              type="submit"
              value="answer"
              onClick={(e) =>
                handleClick(e, question.answers, question.correctAnswer)
              }
            />
          </form>
        </div>
      ))}
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
