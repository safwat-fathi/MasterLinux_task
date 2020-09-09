import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchQuestions } from "../actions";

const QuestionsList = (props) => {
  // props
  const { loading, questions, fetchQuestions } = props;
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setAnswer(e.target.value);
  };

  const handleClick = (e, correctAnswer) => {
    e.preventDefault();

    console.log(correctAnswer);
  };

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
