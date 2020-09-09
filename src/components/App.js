import React from "react";
// react router
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   withRouter,
// } from "react-router-dom";

// import { compose } from "redux";
import { connect } from "react-redux";
// app components
import QuestionsList from "./QuestionsList";

const App = (props) => {
  return (
    // <Router>
    //   <Switch location={isModal ? prevLocation : location}>
    //     <Route exact path="/" component={GenresList} />
    //     <Route path="/:genre_id">
    //       <ArtistsModal />
    //     </Route>
    //     <Route>{"no match"}</Route>
    //   </Switch>
    //   {isModal ? (
    //     <Route exact path="/:genre_id">
    //       <ArtistsModal />
    //     </Route>
    //   ) : null}
    // </Router>
    <>
      <QuestionsList />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
