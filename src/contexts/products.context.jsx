import { createContext } from 'react';

import PRODUCTS from '../shop-data.json';

import React from 'react';
import { Children } from 'react';
import { useState } from 'react';

export const ProductContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}> {children}</ProductContext.Provider>
  );
};

export default ProductsProvider;
