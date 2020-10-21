import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link>
          <li to="/home">Home</li>
        </Link>
        <Link>
          <li to="/about">About</li>
        </Link>
        <Link>
          <li to="extras">Extra</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
