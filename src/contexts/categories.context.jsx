import { SHOP_DATA } from '../shop-data.js';
import { createContext, useEffect, useState } from 'react';
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../Utils/firebase/firebase.utills';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  //add first time categories in the database doc in firestore.
  // useEffect(() => {
  //   console.log(SHOP_DATA);
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
