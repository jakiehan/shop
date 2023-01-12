import './index.css';
import Card from '@components/Card';
import CardList from '@components/CardList';
import Form from '@components/Form';
import { debounce } from '@utils/debounce.js';
import { client } from '@client/axiosConfig.js';

(async function loadProducts() {
  try {
    const { data } = await client.get('item');
    showProducts.renderItems(data.content);
  } catch { }
}());

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
  return card.createCard();
}

const form = new Form({
  handleChange: debounce((e) => {
    showProducts.filterItems(e.target.value);
  },500)
})

form.setEventListeners();
