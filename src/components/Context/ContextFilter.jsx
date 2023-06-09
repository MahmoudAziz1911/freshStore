import React, { createContext, useReducer } from "react";
import allProducts from "../../Data";

const initialFilterState = {
  filteredItems: [...allProducts],
  searchKey: "",
  category: 'ALL'
};

const filterItemsHandler = (ctg) => {
  const filteredItems = allProducts.filter((product) => {
    return product.category === ctg;
  });

  return { filteredItems };
};

const filterReduce = (state, action) => {
  switch (action.type) {
    case "SEARCH_KEYWORD":
      state.searchKey = action.payload;
      return {
        ...state
      };
    case "ALL":
      state.filteredItems = [...allProducts];
      state.category = "ALL";
      return {
        ...state
      };

    case "VEGETABLE":
      state.category = "VEGETABLE";
      return {
        ...state,
        ...filterItemsHandler("خضراوات")
      };

    case "FRUIT":
      state.category = "FRUIT";
      return { ...state, ...filterItemsHandler("فاكهة") };

    case "NUTS":
      state.category = "NUTS";
      return { ...state, ...filterItemsHandler("مكسرات") };

    case "BEANS":
      state.category = "BEANS";
      return { ...state, ...filterItemsHandler("حبوبات") };

    default:
      return state;
  }
};

export const FilterContext = createContext();

export default function ContextFilter({ children }) {
  const [state, dispatch] = useReducer(filterReduce, initialFilterState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
