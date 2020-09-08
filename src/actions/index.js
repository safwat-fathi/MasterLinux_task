import api from "../utils/api";

/* 
---------------
genres actions
---------------
*/
export const fetchQuestionsRequest = () => {
  return {
    type: "FETCHING_QUESTIONS_PENDING",
  };
};

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: "FETCHING_QUESTIONS_SUCCESS",
    payload: questions,
  };
};

// export const fetchQuestionsFail = (error) => {
//   return {
//     type: "FETCHING_QUESTIONS_FAILED",
//     payload: error,
//   };
// };

export const fetchQuestions = () => {
  return (dispatch) => {
    // setting loading state to true
    dispatch(fetchQuestionsSuccess(api));

    // console.log(api);

    // api
    //   .get("/genre")
    //   .then((res) => {
    //     const genres = res.data;
    //     dispatch(fetchQuestionsSuccess(genres.data));
    //   })
    //   .catch((err) => {
    //     dispatch(fetchQuestionsFail(err.message));
    //   });
  };
};

/* 
---------------
genre artists actions
---------------
*/
export const fetchGenreArtistsRequest = () => {
  return {
    type: "FETCHING_ARTISTS_GENRE_PENDING",
  };
};

export const fetchGenreArtistsSuccess = (genreArtists) => {
  return {
    type: "FETCHING_ARTISTS_GENRE_SUCCESS",
    payload: genreArtists,
  };
};

export const fetchGenreArtistsFail = (error) => {
  return {
    type: "FETCHING_ARTISTS_GENRE_FAILED",
    payload: error,
  };
};

export const fetchGenreArtists = (genreID) => {
  return (dispatch) => {
    // setting loading state to true
    dispatch(fetchGenreArtistsRequest());

    // api
    //   .get(`/genre/${genreID}/artists`)
    //   .then((res) => {
    //     const genreArtists = res.data;

    //     dispatch(fetchGenreArtistsSuccess(genreArtists.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatch(fetchGenreArtistsFail(err.message));
    //   });
  };
};
