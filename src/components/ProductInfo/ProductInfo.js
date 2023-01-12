import { BASE_URL } from '@utils/constants.js';
import likeInactive from '@images/like-card.svg';
import likeActive from '@images/like-card-active.svg';

export default class ProductInfo {
  constructor({ img, title, description, subtitle, subtitleDescription, price, like }) {
    this._img = document.querySelector(img);
    this._title = document.querySelector(title);
    this._description = document.querySelector(description);
    this._subtitle = document.querySelector(subtitle);
    this._subtitleDescription = document.querySelector(subtitleDescription);
    this._price = document.querySelector(price);
    this._like = document.querySelector(like);
  }

  setInfo(data) {

    const { picture, name, price, info, description, details, like } = data;

    this._img.src = `${BASE_URL}${picture.path}`;
    this._img.alt = data.name;
    this._title.textContent = name;
    this._price.textContent = `$${price.value}`;
    this._description.textContent = info;
    this._subtitle.textContent = description;
    this._subtitleDescription.textContent = details;
    this._like.src = !like ? likeInactive : likeActive;
  }
}