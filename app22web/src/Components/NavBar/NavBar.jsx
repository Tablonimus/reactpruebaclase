import React from "react";
import logoPikachu from "../../Assets/Images/logo.png";

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center bg-red-600 ">
      <img src={logoPikachu} alt="logo" className="w-20" />
      <ul className="flex gap-5 text-white font-bold">
        <li>Home</li>
        <li>Busca tu pokemon</li>
        <li>Categorias</li>
      </ul>
    </nav>
  );
}
