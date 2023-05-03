import React from "react";
import "./footerStyle.css";
import RoundedButton from "../Buttons/RoundedButton";

export default function Footer() {
  let variableContenido = "Este es otro contenido";

  return (
    <div className="footer">
      Este footer es nuevo
      <RoundedButton contenido={variableContenido} />
    </div>
  );
}
