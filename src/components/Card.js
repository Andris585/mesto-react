function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__item" key={`${props.card._id}`}>
    <img src={`${props.card.link}`} className="elements__pic" alt="" onClick={handleClick} />
    <button
      className="elements__delete-button button elements__delete-button_inactive"
      type="button"
      id="delete"
    ></button>
    <div className="elements__bottom-container">
      <h2 className="elements__caption">{`${props.card.name}`}</h2>
      <div className="elements__likesmetter">
        <button
          className="elements__like"
          type="button"
          id="like"
        >
        </button>
        <span className="elements__like-counter"></span>
      </div>
    </div>
  </li>
  )
}

export default Card;