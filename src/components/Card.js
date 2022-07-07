import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-grid__card">
      <img
        className="photo-grid__card-image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick} />
      <button className="photo-grid__remove-button" />
      <div className="photo-grid__card-content">
        <h4 className="photo-grid__card-text">{props.card.name}</h4>
        <div className="photo-grid__like-container">
          <button className="photo-grid__like-button" type="button" />
          <div className="photo-grid__like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card;
