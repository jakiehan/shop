export default class Form {
  constructor({ handleChange }) {
    this._form = document.querySelector('.form');
    this._input = this._form.querySelector('.input');
    this._handleChange = handleChange;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this._input.addEventListener('input', (e) => {
      this._handleChange(e)
    })
  }
}