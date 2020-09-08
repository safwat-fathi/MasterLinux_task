const initState = {
  loading: false,
  loadingQuestions: false,
  questions: [],
  error: "",
};

const rootReducer = (state = initState, action) => {
  const { questions } = state;

  switch (action.type) {
    case "FETCHING_QUESTIONS_PENDING":
      console.log("FETCHING_QUESTIONS_PENDING");
      return {
        ...state,
        loading: true,
      };
    case "FETCHING_QUESTIONS_SUCCESS":
      console.log("FETCHING_QUESTIONS_SUCCESS");
      return {
        ...state,
        loading: false,
        questions: [...questions, ...action.payload],
        error: "",
      };
    case "FETCHING_QUESTIONS_FAILED":
      return {
        ...state,
        loading: false,
        questions: [],
        error: action.payload,
      };
    // case "FETCHING_ARTISTS_GENRE_PENDING":
    //   return {
    //     ...state,
    //     loadingGenreArtists: true,
    //   };
    // case "FETCHING_ARTISTS_GENRE_SUCCESS":
    //   return {
    //     ...state,
    //     loadingGenreArtists: false,
    //     genreArtists: [...action.payload],
    //   };
    // case "FETCHING_ARTISTS_GENRE_FAILED":
    //   return {
    //     ...state,
    //     loadingQuestions: false,
    //     genreArtists: [],
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};

export default rootReducer;
