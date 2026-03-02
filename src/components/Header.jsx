import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <div className="user">Admin</div>
    </div>
  );
};

export default Header;
