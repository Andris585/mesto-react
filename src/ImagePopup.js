function ImagePopup(props) {
  return (
    <div className={`popup popup_type_img-scale ${props.card ? 'popup_opened' : ''}`}>
        <div className="popup__wrapper">
        <img src={`${props.card.link}`} alt="" className="popup__pic-scaled" />
          <h2 className="popup__pic-caption"></h2>
          <button className="popup__close-button button" type="button" onClick={props.onClose}></button>
        </div>
      </div>
  );
}

export default ImagePopup;