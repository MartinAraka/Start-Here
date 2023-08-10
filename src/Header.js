import React from "react";
// eslint-disable-next-line react/prop-types
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title} </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
