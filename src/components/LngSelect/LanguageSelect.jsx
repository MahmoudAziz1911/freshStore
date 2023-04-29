import React, { useContext } from "react";
import "./LanguageSelect.css";
import { ProductContext } from "../Context/ContextProvider";

export default function LanguageSelect(props) {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <select
      value={state.lng}
      onChange={(e) =>
        dispatch({ type: "LANG_CHANGE", payload: e.target.value })
      }
    >
      <option value="EN">English</option>
      <option value="AR">العـربية</option>
    </select>
  );
}
