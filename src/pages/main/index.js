import './index.css';
import Api from '../../components/Api.js';
import Card from '../../components/Card.js';
import CardList from '../../components/CardList.js';
import Form from '../../components/Form.js';
import { BASE_URL } from '../../utils/constants.js';

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

  function debounce(callee, timeoutMs) {
    return function perform(...args) {
      // временная метка предыдущего вызова
      let previousCall = this.lastCall;

      // временная метка нынешнего момента.
      this.lastCall = Date.now()

      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer)
      }

      this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
    }
  }

  const form = new Form({
    handleChange: debounce((e) => {
      showProducts.filterItems(e.target.value);
    },500)
  })

  form.setEventListeners();
