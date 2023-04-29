import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import { ProductContext } from "../Context/ContextProvider";

export default function Footer() {
  const { state: lng } = useContext(ProductContext);
  const year = new Date().getFullYear()
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>

      <div className="footer_last">
        <div className="footer_link_box">
          <Link to={"/basket"}>{lng.lng === "AR" ? "سلـة التسوق" : "Cart"}</Link>
          <Link to={"/favorite"}>
            {lng.lng === "AR" ? "المفضـلة" : "Favorite"}
          </Link>
          <span>
          Fresh Store Made by Mahmoud Abdelaziz &copy; {year}
        </span>
        </div>
      </div>
      
    </footer>
  );
}
