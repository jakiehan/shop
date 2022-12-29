export default class CardList {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }

  filterItems(value) {
    const cards = document.querySelectorAll('.item');
    cards.forEach(card => {
      let title = card.querySelector('.card-title');
      let textTitle = title.textContent;

      if (!textTitle.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        card.classList.add('item-hide');
      } else {
        card.classList.remove('item-hide');
      }
    })
  }
}