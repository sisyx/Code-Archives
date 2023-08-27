import { useEffect, useState } from "react";

import Box from "./Box.js";
import ErrorMessage from "./ErrorMessage.js";
import Loader from "./Loader.js";
import Main from "./Main.js";
import MovieDetail from "./MovieDetail.js";
import Search from "./Search.js";
import MoviesList from "./MoviesList.js";
import WatchedMoviesList from "./WatchedMoviesList.js";
import WatchedSummary from "./WatchedSummary.js";
import CloseBtn from "./CloseBtn.js";
import useMovies from "./useMovies.js";
import useLocalStorageState from "./useLocalStorageState.js";

const KEY = "826f1c63";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [isOpen1, setIsOpen1] = useState(true);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSearch(result) {
    setQuery((cur) => result);
  }

  function handleSelectMovie(id) {
    setSelectedId((cur) => (cur === id ? null : id));
    setIsOpen1((cur) => false);
  }

  function handleCloseMovie() {
    setSelectedId(null);
    // document.title = "usePopcorn";
  }

  function handleAddWatched(movie) {
    setWatched((cur) => [...cur, movie]);
  }

  function handleRemoveWatched(movie) {
    setWatched((cur) => cur.filter((tmovie) => tmovie.imdbId !== movie.imdbId));
  }

  const [movies, error, isLoading] = useMovies(query);

  return (
    <>
      <Search onsearch={handleSearch} />
      <WatchedSummary watched={watched} />
      <Main>
        {isOpen1 ? (
          <Box clas="movies-list">
            {isLoading ? (
              <Loader />
            ) : error.length !== 0 ? (
              <ErrorMessage message={error} />
            ) : (
              <MoviesList movies={movies} onmovieselect={handleSelectMovie} />
            )}
          </Box>
        ) : (
          <Box>
            {selectedId ? (
              <MovieDetail
                selectedId={selectedId}
                onclosemovie={handleCloseMovie}
                onselectid={setSelectedId}
                onAddWatched={handleAddWatched}
                KEY={KEY}
                watched={watched}
              />
            ) : (
              <>
                <WatchedMoviesList
                  watched={watched}
                  onRemoveWatched={handleRemoveWatched}
                />
              </>
            )}
          </Box>
        )}

        <CloseBtn setIsOpen={setIsOpen1} isOpen={isOpen1} />
      </Main>
    </>
  );
}
