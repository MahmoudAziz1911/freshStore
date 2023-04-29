import React, { useContext } from "react";
import { FilterContext } from "../../Context/ContextFilter";
import "./Filter.css";
import { ProductContext } from "./../../Context/ContextProvider";

export default function Filter() {
  const { state, dispatch } = useContext(FilterContext);
  const { state: lng } = useContext(ProductContext);

  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button
          onClick={() => dispatch({ type: "ALL" })}
          className={`filter_btn  ${state.category === "ALL" && "active"}`}
        >
          {lng.lng === "AR" ? "الكل" : "All"}
        </button>
        <button
          onClick={() => dispatch({ type: "VEGETABLE" })}
          className={`filter_btn ${state.category === "VEGETABLE" && "active"}`}
        >
          {lng.lng === "AR" ? "خضراوات" : "Vegetables"}
        </button>
        <button
          onClick={() => dispatch({ type: "FRUIT" })}
          className={`filter_btn ${state.category === "FRUIT" && "active"}`}
        >
          {lng.lng === "AR" ? "فاكهة" : "Fruit"}
        </button>
        <button
          onClick={() => dispatch({ type: "NUTS" })}
          className={`filter_btn ${state.category === "NUTS" && "active"}`}
        >
          {lng.lng === "AR" ? "مكسرات" : "Nuts"}
        </button>
        <button
          onClick={() => dispatch({ type: "BEANS" })}
          className={`filter_btn ${state.category === "BEANS" && "active"}`}
        >
          {lng.lng === "AR" ? "حبوبات" : "Beans"}
        </button>
      </div>
    </div>
  );
}
