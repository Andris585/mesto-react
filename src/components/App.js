import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "../ImagePopup";

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
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState(false);

  console.log(selectedCard);

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
      >
        <div className="popup__input-container">
          <input
            id="popup__input-edit-profile"
            type="text"
            name="name"
            value=""
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
            value=""
            placeholder="Кто вы?"
            className="popup__input popup__input_type_bio popup__input_type_error"
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
          <span className="popup__error popup__input-bio-error"></span>
        </div>
        <button type="submit" className="popup__submit">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      >
        <div className="popup__input-container">
          <input
            id="popup__input-location-name"
            type="text"
            name="name"
            value=""
            placeholder="Название"
            className="popup__input popup__input_type_location-name popup__input_type_error"
            required
            minlength="2"
            maxlength="30"
            autocomplete="off"
          />
          <span className="popup__error popup__input-location-name-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            id="popup__input-link"
            type="url"
            name="link"
            value=""
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link popup__input_type_error"
            required
            autocomplete="off"
          />
          <span className="popup__error popup__input-link-error"></span>
        </div>
        <button type="submit" className="popup__submit">
          Создать
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <div className="popup__input-container">
          <input
            id="popup__avatar-input-link"
            type="url"
            name="link"
            value=""
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link popup__input_type_error"
            required
            autocomplete="off"
          />
          <span className="popup__error popup__avatar-input-link-error"></span>
        </div>
        <button type="submit" className="popup__submit">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        // isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <button
              type="submit"
              className="popup__submit popup__submit_type_delete-card"
            >
              Да
            </button>
      </PopupWithForm>
      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
      />
    </div>
  );
}

export default App;
