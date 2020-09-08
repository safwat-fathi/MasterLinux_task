import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import api from "../utils/api";
// import { Link } from "react-router-dom";

import {
  fetchQuestions,
  // fetchQuestionsSuccess,
  // fetchQuestionsRequest,
} from "../actions";

const QuestionsList = (props) => {
  // props
  const { loading, loadingQuestions, questions, fetchQuestions, error } = props;
  const [answer, setAnswer] = useState(null);
  // console.log(api);
  useEffect(() => {
    // fetchQuestionsRequest();
    fetchQuestions();
    // fetchQuestionsSuccess(api);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setAnswer(e.target.value);
  };

  const handleClick = (e, correctAnswer) => {
    e.preventDefault();

    console.log(correctAnswer);
  };

  // console.log(props);
  return loading ? (
    <div>
      <h3>Loading...</h3>
    </div>
  ) : (
    <>
      <h1>questions list</h1>
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
                  id={answer}
                  value={answer}
                />
                <label htmlFor={answer}>{answer}</label>
              </div>
            ))}
            <input
              type="submit"
              value="answer"
              onClick={(e) => handleClick(e, question.correctAnswer)}
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
    // fetchQuestionsRequest: () => dispatch(fetchQuestionsRequest()),
    // fetchQuestionsSuccess: () => dispatch(fetchQuestionsSuccess(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
