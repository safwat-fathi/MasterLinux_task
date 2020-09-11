import {
  FETCHING_QUESTIONS_PENDING,
  FETCHING_QUESTIONS_SUCCESS,
  FETCHING_QUESTIONS_FAILED,
  QUESTION_ANSWERED_CORRECT,
  QUESTION_ANSWERED_WRONG,
} from "../actions/actionTypes";

const initState = {
  loading: false,
  questions: [],
  score: 0,
  error: "",
};

const subScore = (score) => {
  return score <= 0 ? 0 : score - 1;
};

const rootReducer = (state = initState, action) => {
  const { questions, score } = state;

  switch (action.type) {
    case FETCHING_QUESTIONS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: [...questions, ...action.payload],
        error: "",
      };
    case FETCHING_QUESTIONS_FAILED:
      return {
        ...state,
        loading: false,
        questions: [],
        error: action.payload,
      };
    case QUESTION_ANSWERED_CORRECT:
      return {
        ...state,
        score: score + 1,
      };
    case QUESTION_ANSWERED_WRONG:
      return {
        ...state,
        score: subScore(score),
      };
    default:
      return state;
  }
};

export default rootReducer;
