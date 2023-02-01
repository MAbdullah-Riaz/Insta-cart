import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../Utils/reducer/reducer.utills';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
