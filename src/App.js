import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
 
  return (
    <React.Fragment>
      <section>
        <button Api>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
