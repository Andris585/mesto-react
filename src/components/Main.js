import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [ userName, setUserName] = React.useState('');
  const [ userDescription, setUserDescription ] = React.useState('');
  const [ userAvatar, setUserAvatar ] = React.useState('#');
  const [ cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
    .then(({ name, about, avatar}) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then((cardsInfo) => {
      Object.entries(cardsInfo);
      setCards(cardsInfo);
    });
  }, [])

   return (
    <main className="content">
    <section className="profile">
      <div className="profile__container">
        <div className="profile__avatar-container">
          <img src={`${userAvatar}`} alt="аватар профиля" className="profile__avatar" />
          <div className="profile__overlay" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{`${userName}`}</h1>
          <button className="profile__button-edit button" type="button" onClick={onEditProfile}></button>
          <p className="profile__bio">{`${userDescription}`}</p>
        </div>
      </div>
      <button className="profile__button-add button" type="button" onClick={onAddPlace}></button>
    </section>
    <section className="elements" aria-label="фотогалерея профиля">
      <ul className="elements__list">
        {cards.map((card) => (
          <Card card={card} onCardClick={onCardClick} />
        ))}
      </ul>
    </section>
  </main>
  )
}

export default Main;