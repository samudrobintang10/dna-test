import React from "react";
import { Link } from "react-router-dom";

function Button({ href, placeholder, isFull }) {
  return (
    <Link to={href}>
      <button
        className={"py-3 px-6 bg-primary-light-blue rounded-lg".concat(
          " ",
          isFull ? "w-full" : ""
        )}
      >
        <h5 className="font-medium text-sm text-white">{placeholder}</h5>
      </button>
    </Link>
  );
}

export default Button;
