import React, { useContext } from "react";
import { ProductContext } from "../Context/ContextProvider";
import "./FavoritePage.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import FavoriteCard from "./FavoriteCard";

export default function FavoritePage() {
  const { state, dispatch } = useContext(ProductContext);


  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>{state.lng === "AR" ? "المفضلـة" : "Favorites"}</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            {state.lng === "AR" ? " صفحه المنتجـات" : "Products page"}
          </Link>
        </div>
      </div>
      <div className="favorite-wrapper">
        {state.favorites.length > 0 ? (
          <>
            <div>
              <button
                onClick={() => dispatch({ type: "REMOVE_ALL_FAVORITE" })}
                className="favorite_removeAll"
              >
                {state.lng === "AR" ? "حـذف الكـل" : "Remove All"}
              </button>
            </div>
            <div className="favorite_container">
              {state.favorites.map((product) => (
                <FavoriteCard key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : (
          <div className="favorite_empty">
            <img
              className="favorite_empty_img"
              src="images/empty_favorite.svg"
              alt=""
            />
            <span className="favorite_empty_title">
              {state.lng === "AR"
                ? "المفضـلة فـارغـة"
                : "Favorites are empty"}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
