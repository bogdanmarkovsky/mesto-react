import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name='profile-form'
        title='Редактировать профиль'
        buttonText='Сохранить'>
        <input
          id="name-input"
          className="popup-form__field"
          name="name"
          placeholder="Имя профиля"
          type="text"
          minLength="2"
          maxLength="40"
          required />
        <span className="span-container name-input-error" />
        <input
          id="job-input"
          className="popup-form__field"
          name="about"
          placeholder="Род деятельности"
          type="text"
          minLength="2"
          maxLength="200"
          required />
        <span className="span-container job-input-error" />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name='photo-form'
        title='Новое место'
        buttonText='Создать'>
        <input
          id="caption-input"
          className="popup-form__field"
          name="photo_caption"
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
          required />
        <span className="span-container caption-input-error" />
        <input
          id="link-input"
          className="popup-form__field"
          name="photo_link"
          placeholder="Ссылка на картинку"
          type="url"
          required />
        <span className="span-container link-input-error" />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name='change-ava'
        title='Обновить аватар'
        buttonText='Сохранить'>
        <input
          id="ava-input"
          className="popup-form__field"
          name="ava_link"
          placeholder="Ссылка на картинку"
          type="url"
          required />
        <span className="span-container ava-input-error" />
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
