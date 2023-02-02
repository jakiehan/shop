import { popupSelectors } from '@utils/constants.js';
import './Popup.css';
import errorIcon from '@images/error-icon.svg';

export default class Popup {
  constructor() {
    this._popupContainer = document.querySelector(popupSelectors.popupContainer);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  show(msg) {
    this._popupContainer.insertAdjacentHTML('beforeend',
`<div class="popup">
        <div class="popup-container">
          <img 
            class="popup-img"
            src=${errorIcon}
            alt="Error icon"
          >
          <p class="popup-message">
            ${msg}
          </p>
          <button 
            class="popup-close transparency" 
            type="button" 
            aria-label="Close button">
          </button>
        </div>
      </div>`
    );

    this._popup = document.querySelector(popupSelectors.popup);

    document.addEventListener('keydown', this._handleEscClose);
    this._setEventListeners();
  }

  _close() {
    this._popupContainer.removeChild(this._popup);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this._close();
    }
  }

  _setEventListeners() {
    this._popup.addEventListener('mousedown', (e) => {
      if ((e.target.classList.contains('popup')) || (e.target.classList.contains(popupSelectors.close))) {
        this._close();
      }
    });
  }
}