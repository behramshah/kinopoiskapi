import React from "react";
import './movies.css'

function Cards(props) {
  return (
    <div className="notes">
      <div className="notes__cards">
        <p className="card__name">{props.name}</p>
        <button className="remove__btn" onClick={() => props.onRemove(props.id)}>
          X
        </button>
        <img className="card__image" src={props.images} />
        <p className="card__about">{props.about}</p>
      </div>
    </div>
  );
}

export default Cards;
