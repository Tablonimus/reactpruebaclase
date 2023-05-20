import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { pokemonesPorPagina } from "../../Controllers/api";
import { Link } from "react-router-dom";

export default function Main() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    pokemonesPorPagina().then((res) => setPokemones(res));
  }, []);
  console.log(pokemones);
  return (
    <div id="login" className="">
      <NavBar />
      <div className="flex flex-col justify-center items-center gap-5 py-10 ">
        {pokemones.length
          ? pokemones.map((pokemon) => (
              <Link to={`/pokemon/${pokemon.id}`}>
                <div
                  key={pokemon.id}
                  className="flex flex-col items-center w-2/3 justify-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl"
                >
                  <img src={pokemon.imagen} alt="" className="w-36" />
                  <div className="flex flex-col">
                    <span>{pokemon.nombre}</span>
                    <span>{pokemon.tipo}</span>
                    <span>{pokemon.nombre}</span>
                  </div>
                </div>
              </Link>
            ))
          : false}
      </div>
    </div>
  );
}
