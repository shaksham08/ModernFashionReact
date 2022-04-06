import { SORT_BY } from "context/ProductsContext/ProductsActions";

export function price(originalPrice, discount) {
  return parseInt(originalPrice) - parseInt((originalPrice * discount) / 100);
}

export const getSortedData = (products, state) => {
  const productsData = [...products];

  if (state.sortBy === SORT_BY.HIGH_TO_LOW) {
    productsData.sort(
      (a, b) =>
        price(b.originalPrice, b.discount_percent) -
        price(a.originalPrice, a.discount_percent)
    );
  } else if (state.sortBy === SORT_BY.LOW_TO_HIGH) {
    productsData.sort(
      (a, b) =>
        price(a.originalPrice, a.discount_percent) -
        price(b.originalPrice, b.discount_percent)
    );
  }
  return productsData;
};

export const getFilteredData = (sortedProductsData, state) => {
  let productsData = [...sortedProductsData];
  if (state.range) {
    productsData = productsData.filter(
      (item) => Number(item.originalPrice) <= Number(state.range)
    );
  }

  if (state.ratings !== null) {
    productsData = productsData.filter((item) => item.rating >= state.ratings);
  }

  const selectedCategory = Object.values(state.selectedCategories).some(
    (value) => value
  );

  if (selectedCategory) {
    productsData = productsData.filter((item) => {
      return state.selectedCategories[item.categoryName];
    });
  }

  return productsData;
};
