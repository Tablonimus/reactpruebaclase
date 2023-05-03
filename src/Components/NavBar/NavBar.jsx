import React from "react"; //PUEDEN PROBAR QUE PASA SI LO BORRAN A ESTE IMPORT
import "../../Styles/navBarStyle.css";
import RoundedButton from "../Buttons/RoundedButton";
//------------------------------------------------------------------------//
export default function NavBar() {
  let variableContenido = "Iniciar Sesion ahora";

  return (
    <div className="navbar">
      esta es mi barra de navegacion{" "}
      <RoundedButton contenido={variableContenido} />
    </div>
  );
}
