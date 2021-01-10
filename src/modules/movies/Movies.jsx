import React, { useReducer, useEffect } from "react";
import Cards from './Cards';
import { getRate } from "../REST";
import constants from "../../constants/constants";
import { initialState, reducer } from "../../manager/reducer";
import './movies.css'

const FilmRating = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRate().then((res) => {
      dispatch({
        type: constants.SAVE_CARDS,
        payload: res.films,
      });
    });
  }, []);

  const { movies } = state;

  const handleRemove = (filmId) => {
    console.log(filmId);
    dispatch({
      type: constants.REMOVE_CARD,
      payload: filmId,
    });
  };

  return (
    <div data-at={"root__wrapper"}>
      <div>
        <h1 className={"wrapper__header"}>Top await movies</h1>
      </div>
      <div className={"root__dictionary"}>
        <div>
          {movies.length
            ? movies.map((move, index) => (
                <Cards
                  id={move.filmId}
                  key={index}
                  name={move.nameEn}
                  about={move.year}
                  images={move.posterUrl}
                  onRemove={handleRemove}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default FilmRating;
