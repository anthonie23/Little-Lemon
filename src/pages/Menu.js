import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <Link to="appetizer">Appetizer</Link>
        <Link to="main-course">Main Course</Link>
        <Link to="appetizer">Appetizer</Link>
      </ul>
    </div>
  );
};

export default Menu;
