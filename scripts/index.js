import Api from './Api.js';
import Card from './Card.js';
import CardList from './CardList.js';
import Form from './Form.js';
import { BASE_URL } from '../utils/constants.js';

const api = new Api(BASE_URL);

api.getProducts()
  .then(data => {
    showProducts.renderItems(data.content)
  })
  .catch(err => console.log(err));


  const showProducts = new CardList({
    renderer: (item) => {
      showProducts.addItem(generateCard(item));
    }
  }, '.products-list');


  function generateCard(data) {
    const card = new Card(data, {
      handleCardClick: (id) => {
        const url = new URL(`${window.location.href}detailed.html`);
        url.searchParams.set('id', id);
        window.location.assign(url);
      },
    });
    const cardElement = card.createCard();
    return cardElement;
  }

  const form = new Form({
    handleChange: (e) => {
      showProducts.filterItems(e.target.value);
    }
  })

  form.setEventListeners();
