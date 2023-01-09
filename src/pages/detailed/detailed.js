import './detailed.css';
import ProductInfo from "../../components/ProductInfo.js";
import { detailedSelectors } from "../../utils/constants.js";
import { client } from '../../api/axiosConfig.js';

const productInfo = new ProductInfo(detailedSelectors);

const paramsFromUrl = new URLSearchParams(window.location.search);
const cardId = paramsFromUrl.get('id');

(async function loadProductInfo() {
  try {
    const { data } = await client.get(`item/${cardId}`);
    productInfo.setInfo(data.content);
  } catch (error) {
    console.log(error);
  }
}());