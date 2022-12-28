import Api from "./Api.js";
import ProductInfo from "./ProductInfo.js";
import Form from "./Form.js";
import { BASE_URL, detailedSelectors } from "../utils/constants.js";

const api = new Api(BASE_URL);
const productInfo = new ProductInfo(detailedSelectors);

const paramsFromUrl = new URLSearchParams(window.location.search);
const cardId = paramsFromUrl.get('id');

api.getProduct(cardId)
  .then(data => {
    productInfo.setInfo(data.content);
  })
  .catch(err => console.log(err))
