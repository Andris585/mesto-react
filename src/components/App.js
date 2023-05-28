import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState({name: '', link: ''});

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
        btnText="Сохранить"
      >
        <div className="popup__input-container">
          <input
            id="popup__input-edit-profile"
            type="text"
            name="name"
            placeholder="Ваше имя?"
            className="popup__input popup__input_type_name popup__input_type_error"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
          <span className="popup__error popup__input-edit-profile-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            id="popup__input-bio"
            type="text"
            name="about"
            placeholder="Кто вы?"
            className="popup__input popup__input_type_bio popup__input_type_error"
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
          <span className="popup__error popup__input-bio-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
        btnText="Создать"
      >
        <div className="popup__input-container">
          <input
            id="popup__input-location-name"
            type="text"
            name="name"
            placeholder="Название"
            className="popup__input popup__input_type_location-name popup__input_type_error"
            required
            minLength="2"
            maxLength="30"
            autoComplete="off"
          />
          <span className="popup__error popup__input-location-name-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            id="popup__input-link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link popup__input_type_error"
            required
            autoComplete="off"
          />
          <span className="popup__error popup__input-link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        btnText="Сохранить"
      >
        <div className="popup__input-container">
          <input
            id="popup__avatar-input-link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link popup__input_type_error"
            required
            autoComplete="off"
          />
          <span className="popup__error popup__avatar-input-link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        onClose={closeAllPopups}
        btnText="Да"
      />
      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
      />
    </div>
  );
}

export default App;
