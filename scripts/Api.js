export default class Api {
  constructor(url) {
    this._url = url;
  }

  _makeRequest(promise) {
    return promise.then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res.status;
    }).then(obj => {
      return obj;
    })
  }

  getProducts() {
    const promise = fetch(`${this._url}item`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._makeRequest(promise)
  }

  getProduct(id) {
    const promise = fetch(`${this._url}item/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._makeRequest(promise)
  }
}