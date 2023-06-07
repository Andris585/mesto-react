import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";
import api from '../utils/Api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser.id);
    api.toggleLikeButton(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
  }

  function handleUpdateUser(newData) {
    api.postUserInfo(newData)
    .then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(src) {
    api.changeAvatar(src)
    .then((info) => {
      setCurrentUser(info);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(cardInfo) {
    api.postNewCard(cardInfo)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
    .then(() => {
      setCards(cards.filter((item) => item._id !== card._id))
    })
    .catch((err) => console.log(err));
  }

  const [isEditProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({name: '', about: '', avatar: '', id: ''});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
    .then((cardsInfo) => {
      Object.entries(cardsInfo);
      setCards(cardsInfo);
    }).catch((err) => console.log(err));
  }, [])

  React.useEffect(() => {
    api.getUserData()
    .then(({name, about, avatar, _id}) => {
      setCurrentUser({ name: name, about: about, avatar: avatar, id: _id })
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
