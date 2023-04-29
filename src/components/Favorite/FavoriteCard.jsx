import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ContextProvider";
import Buttons from "../Buttons/Buttons";

export default function FavoriteCard(props) {
  const { state, dispatch } = useContext(ProductContext);

  const checkInBasket = state.basket.find((item) => (
    item.id === props.id
  ));

  const checkBasket = state.basket.some(
    (product) => product.id === (props.id)
  );
  return (
    <div key={props.id} className="favorite_card">
      <Link to={`/${props.id}`}>
        <img className="favorite_img" src={props.image} alt="favorite_image" />
        <div className="favorite_content">
          <div className="favorite_title">
            <span>
              {" "}
              {state.lng === "AR" ? props.title : props.title_en}
            </span>
          </div>
        </div>
      </Link>
      {checkBasket ?
        (<Buttons {...checkInBasket} />) : (
          <>
          <button
            onClick={() => dispatch({ type: "ADD_TO_BASKET", payload: props.id })}
            className={`products_button buy_button`}
          >
            {state.lng === "AR" ? " إضافـة إلى السلة" : "Add To Basket"}
          </button>
          <button
          onClick={() => dispatch({ type: "ADD_FAVORITE", payload: props.id })}
          className="favorite_button"
        >
          {state.lng === "AR" ? "  حذف المنتج من المفضلة" : "Remove From Favorite"}
        </button>
        </>
        )}
    </div>
  );
}
