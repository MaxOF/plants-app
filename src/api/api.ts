import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const cardsAPI = {
  fetchCards() {
    return instance.get('/cards');
  },
  addToDrawer(data: CardType) {
    return instance.post('/cart', data);
  },
  getGoods() {
    return instance.get('/cart');
  },
};

export type CardType = {
  imageUrl: string;
  title: string;
  price: number;
};
