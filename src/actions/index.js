import {
  FETCHING_QUESTIONS_PENDING,
  FETCHING_QUESTIONS_SUCCESS,
  QUESTION_ANSWERED_CORRECT,
  QUESTION_ANSWERED_WRONG,
} from "../actions/actionTypes";

import api from "../utils/api";

/* 
---------------
questions actions
---------------
*/
export const fetchQuestionsRequest = () => {
  return {
    type: FETCHING_QUESTIONS_PENDING,
  };
};

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: FETCHING_QUESTIONS_SUCCESS,
    payload: questions,
  };
};

export const fetchQuestions = () => {
  return (dispatch) => {
    // setting loading state to true
    dispatch(fetchQuestionsSuccess(api));
  };
};

export const correctAnswer = () => {
  return {
    type: QUESTION_ANSWERED_CORRECT,
  };
};

export const wrongAnswer = () => {
  return {
    type: QUESTION_ANSWERED_WRONG,
  };
};
