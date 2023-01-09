import { popupSelectors } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupMsg = document.querySelector(popupSelectors.message);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open(msg) {
    this._popupMsg.textContent = msg;
    this._popup.classList.add(popupSelectors.opened);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(popupSelectors.opened);
    this._popupMsg.textContent = '';
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (e) => {
      if ((e.target.classList.contains(popupSelectors.opened)) || (e.target.classList.contains(popupSelectors.close))) {
        this.close();
      }
    });
  }
}