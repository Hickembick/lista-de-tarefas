import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "black", // Definir a cor de fundo da div
    color: "#fff", // Definir a cor do texto
    padding: "10px",
  
  };

  return (
    <header style={headerStyle}>
      <h1>ToDo</h1>
    </header>
  );
};

export default Header;
