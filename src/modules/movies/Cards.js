import React from "react";
import './movies.css'

function Cards(props) {
  return (
    <div className="notes">
      <div className='notes__cards'>
        <p className="card__city">{props.citys}</p>
        <p className="card__about">{props.about}</p>
        <button className='remove__btn'>X</button>
        <img className="card__image" src={props.images}/>
      </div>
    </div>
  );
}

export default Cards;