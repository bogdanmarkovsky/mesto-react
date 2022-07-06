import React from "react";

function ImagePopup(props) {
  return (
    <div className="popup popup_photo-card">
      <div className="popup__container popup__container_card">
        <img className="popup__image" />
        <figcaption className="popup__caption"></figcaption>
        <button id="photo-card-close-button" className="popup__close-button" type="button"></button>
      </div>
    </div>
  )
}
export default ImagePopup;
