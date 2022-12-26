import { BASE_URL, cardSelectors } from "../utils/constants.js";

export default class Card {
  constructor(card, { handleCardClick }) {
    this._id = card.id;
    this._name = card.name;
    this._price = card.price.value;
    this._like = card.like;
    this._img = card.picture.path;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    this._card = document
      .querySelector('.template').content
      .querySelector('.item')
      .cloneNode('true');
    return this._card;
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector(cardSelectors.img);
    this._cardTitle = this._element.querySelector(cardSelectors.title);
    this._cardPrice = this._element.querySelector(cardSelectors.price);
    this._cardLike = this._element.querySelector(cardSelectors.like);

    this._cardImg.src = `${BASE_URL}${this._img}`;
    this._cardImg.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._cardTitle.title = this._name;
    this._cardPrice.textContent = `$ ${this._price}`;
    this._cardLike.src = !this._like ? './assets/images/like-card.svg' : './assets/images/like-card-active.svg';

    this._setEventListeners();

    return this._element;
  }


  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleCardClick(this._id);
    });

    this._cardLike.addEventListener('click', (e) => {
      e.stopPropagation();
    })
  }
}