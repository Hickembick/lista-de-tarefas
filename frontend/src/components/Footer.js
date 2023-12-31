import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obter o ano atual

  const footerStyle = {
    textAlign: "center", // Centralizar o texto
    backgroundColor: "#333", // Definir a cor de fundo da div
    color: "#fff", // Definir a cor do texto
    padding: "5px",
    position: "fixed",
    width: "100%",
    bottom: "0",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} ToDo Hickembick</p>
    </footer>
  );
};

export default Footer;
