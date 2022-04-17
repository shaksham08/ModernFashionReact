import { ProductActions } from "./ProductsActions";

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case ProductActions.GET_DATA: {
      const updatedState = {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories,
        selectedCategories: action.payload.categories.reduce((acc, curr) => {
          return { ...acc, [curr.categoryName]: false };
        }, {}),
      };
      return { ...updatedState };
    }

    case ProductActions.SORT_DATA:
      return { ...state, sortBy: action.payload.value };

    case ProductActions.FILTER_PRICE_RANGE:
      return { ...state, range: action.payload.value };

    case ProductActions.FILTER_RATING:
      return { ...state, ratings: action.payload.value };

    case ProductActions.FILTER_CATEGORY:
      let updatedCategories = { ...state.selectedCategories };
      updatedCategories[action.payload.key] = action.payload.value;
      return { ...state, selectedCategories: updatedCategories };

    case ProductActions.RESET_FILTER:
      return {
        ...state,
        range: 10000,
        ratings: null,
        sortBy: null,
        selectedCategories: state.categories.reduce((acc, curr) => {
          return { ...acc, [curr.categoryName]: false };
        }, {}),
      };

    default:
      return state;
  }
};
