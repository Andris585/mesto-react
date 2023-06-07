import PopupWithForm from "./PopupWithForm";
import React from 'react';

function AddPlacePopup(props) {
  const nameInputRef = React.useRef();
  const linkInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: nameInputRef.current.value,
      link: linkInputRef.current.value
    })
    nameInputRef.current.value='';
    linkInputRef.current.value='';
  }

  return (
    <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={props.isOpen ? "popup_opened" : ""}
        onClose={props.onClose}
        btnText="Создать"
        onSubmit={handleSubmit}
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
            ref={nameInputRef}
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
            ref={linkInputRef}
          />
          <span className="popup__error popup__input-link-error"></span>
    </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;