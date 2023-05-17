import React from "react";
import logoPikachu from "../../Assets/Images/logo.png";

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center  shadow-2xl bg-opacity-50 bg-slate-300   ">
      <img src={logoPikachu} alt="logo" className="w-20" />
      <ul className="flex gap-5 text-white font-bold">
        <li>Home</li>
        <li>Busca tu pokemon</li>
        <li>Categorias</li>
      </ul>
    </nav>
  );
}
