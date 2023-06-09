import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Interest from "./Interest";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ContextProvider";
import Buttons from "../../Buttons/Buttons";

export default function Card(props) {
  const { state, dispatch } = useContext(ProductContext);
  const datas = state.basket.find((product) => product.id === props.id);
  const checkBasket = state.basket.some((product) => product.id === props.id);

  const handelClick = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: props.id });
  };

  return (
    <div key={props.id} className="box">
      <Link to={`/${props.id}`}>
        <img
          className="product_img"
          src={props.image}
          alt={props.title}
          width={230}
          height="auto"
        />
      </Link>
      <div className="content">
        <div className="title">
          <span>{state.lng === "AR" ? props.title : props.title_en}</span>
        </div>
        <div className="price">
          <span>
            {props.price.toLocaleString()} {state.lng === "AR" ? "جنية" : "$"}
          </span>
        </div>
      </div>
      {checkBasket ? (
        <Buttons {...datas} />
      ) : (
        <button onClick={handelClick} className={`products_button buy_button`}>
          {state.lng === "AR" ? "إضافة الى السلة" : "Add to Basket"}
          <FiShoppingCart className="buy_icon" />
        </button>
      )}

      <Interest id={props.id} />
    </div>
  );
}
