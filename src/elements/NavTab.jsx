import React from "react";
import { Link } from "react-router-dom";

function NavTab({ placeholder }) {
  return (
    <Link>
      <div className="py-3 border-b-[3px] border-b-transparent hover:border-b-black">
        <h3 className="font-semibold text-[15px]">
          <span class="text-black">
            {placeholder}
          </span>
        </h3>
      </div>
    </Link>
  );
}

export default NavTab;
