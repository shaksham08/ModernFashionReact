import React, { createContext, useContext, useEffect, useReducer } from "react";
import { fetchCategories } from "requests/categories";
import { fetchProducts } from "requests/Products";
import { getFilteredData, getSortedData } from "utils/Filter/filterFunctions";
import { ProductReducer } from "./ProductReducer";
import { ProductActions } from "./ProductsActions";

const initialState = {
  products: [],
  sortBy: null,
  ratings: null,
  range: 10000,
  categories: [],
  selectedCategories: {},
};

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    (async function () {
      const resultArray = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ]);

      const {
        data: { products },
      } = resultArray[0];

      const {
        data: { categories },
      } = resultArray[1];

      dispatch({
        type: ProductActions.GET_DATA,
        payload: {
          products,
          categories,
        },
      });
    })();
  }, []);

  // Getting Sorted and filtered Data
  const sortedProducts = getSortedData(state.products, state);
  const filteredData = getFilteredData(sortedProducts, state);

  return (
    <ProductContext.Provider
      value={{
        allProducts: state.products,
        products: filteredData,
        categories: state.categories,
        state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { useProduct, ProductContextProvider };
