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

const rootReducer = (state = initState, action) => {
  const { questions } = state;

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
        score: action.payload,
      };
    case QUESTION_ANSWERED_WRONG:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
