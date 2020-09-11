import React from "react";

import { connect } from "react-redux";
// app components
import QuestionsList from "./QuestionsList";

const App = () => {
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
    <div className="App">
      <QuestionsList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
