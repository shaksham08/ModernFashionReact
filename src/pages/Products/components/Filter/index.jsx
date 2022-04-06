import React from "react";
import { useProduct } from "context/ProductsContext/ProductContext";
import {
  ProductActions,
  SORT_BY,
  ratings,
} from "context/ProductsContext/ProductsActions";

const Filter = () => {
  let { state, categories, dispatch } = useProduct();

  return (
    <div className="sidebar">
      <div className="filters d--flex align__item--center justify__content--space-between p-2">
        <p>Filters</p>
        <p
          onClick={(e) =>
            dispatch({
              type: ProductActions.RESET_FILTER,
            })
          }
        >
          Clear
        </p>
      </div>
      <div className="filter__price p-2">
        <label htmlFor="price">Price</label>
        <input
          className="mt-1"
          type="range"
          id="price"
          name="volume"
          min="0"
          max="10000"
          list="tickMarks"
          value={state.range}
          onChange={(e) => {
            dispatch({
              type: ProductActions.FILTER_PRICE_RANGE,
              payload: { value: e.target.value },
            });
          }}
        />
        <datalist id="tickMarks">
          <option value="0" label="0">
            1k
          </option>
          <option value="2000"></option>
          <option value="4000"></option>
          <option value="6000"></option>
          <option value="8000"></option>
          <option value="100000" label="10k"></option>
        </datalist>
        <div className="filter__price__labels d--flex justify__content--space-between">
          <p>0</p>
          <p>5k</p>
          <p>10k</p>
        </div>
      </div>

      <div className="filter__checkbox p-2">
        <p className="mb-2">Categories</p>
        <ul className="list__style--none">
          {categories.map(({ _id: id, categoryName }) => {
            return (
              <li key={id} className="filter__checkbox__item mb-1">
                <input
                  name={categoryName}
                  type="checkbox"
                  checked={state.selectedCategories[categoryName]}
                  id={categoryName}
                  onChange={(e) =>
                    dispatch({
                      type: ProductActions.FILTER_CATEGORY,
                      payload: {
                        value: e.target.checked,
                        key: categoryName,
                      },
                    })
                  }
                />
                <label htmlFor={categoryName}>{categoryName}</label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="filter__checkbox p-2">
        <p className="mb-2">Rating</p>
        <ul className="list__style--none">
          {ratings.map(({ name, id, value }) => (
            <li key={id} className="filter__checkbox__item mb-1">
              <input
                checked={parseInt(state.ratings) === value}
                type="checkbox"
                name="star"
                id={id}
                value={value}
                onChange={() =>
                  dispatch({
                    type: ProductActions.FILTER_RATING,
                    payload: { value },
                  })
                }
              />
              <label htmlFor="1star">{name}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter__checkbox p-2">
        <p className="mb-2">Price</p>
        <ul className="list__style--none">
          <li className="filter__checkbox__item mb-1">
            <input
              checked={state.sortBy === SORT_BY.HIGH_TO_LOW}
              type="checkbox"
              name="price"
              id="hightToLow"
              onChange={() =>
                dispatch({
                  type: ProductActions.SORT_DATA,
                  payload: { value: SORT_BY.HIGH_TO_LOW },
                })
              }
            />
            <label htmlFor="lowToHigh">Price - High To Low</label>
          </li>
          <li className="filter__checkbox__item mb-1">
            <input
              checked={state.sortBy === SORT_BY.LOW_TO_HIGH}
              type="checkbox"
              name="price"
              id="lowToHigh"
              onChange={() =>
                dispatch({
                  type: ProductActions.SORT_DATA,
                  payload: { value: SORT_BY.LOW_TO_HIGH },
                })
              }
            />
            <label htmlFor="highToLow">Price - Low To High </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
