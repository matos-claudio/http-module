// Para instalar as bibliotecas no modulo
// npm install --save-dev

import axios from 'axios';

export const api = axios.create({
  baseURL:
    'https://master--relaxed-fenglisu-464c83.netlify.app/.netlify/functions',
});

// import { IProduct } from '../common/product-interface';
// import api from './api';

// export const fetchProducts = async (): Promise<IProduct[]> => {
//   const response = await api.get<IProduct[]>('/read-products');
//   return response.data;
// };
