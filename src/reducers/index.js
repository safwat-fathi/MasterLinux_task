import {
  FETCHING_QUESTIONS_PENDING,
  FETCHING_QUESTIONS_SUCCESS,
  FETCHING_QUESTIONS_FAILED,
} from "../actions/actionTypes";

const initState = {
  loading: false,
  questions: [],
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
    default:
      return state;
  }
};

export default rootReducer;
