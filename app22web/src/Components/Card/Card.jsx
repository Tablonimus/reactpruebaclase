import React from 'react'
import { Link } from "react-router-dom";

export default function Card({id, imagen, nombre, tipo}) {
  return (
    <Link
    key={id}
    to={`/pokemon/${id}`}
    className="flex flex-col items-center p-5 w-1/2 justify-center bg-slate-300 bg-opacity-50 rounded-lg shadow-2xl"
  >
    <img
      src={imagen}
      alt=""
      className="w-48 border-b border-black"
    />
    <div className="flex flex-col gap-5">
      <span className="font-extrabold text-2xl">
        {nombre?.replace(
          nombre[0],
          nombre[0]?.toUpperCase()
        )}
      </span>
      <div className="flex flex-col items-center justify-center  border border-red-300 rounded-lg ">
        <h3 className="text-lg font-semibold">Tipo: </h3>
        <div>
          {tipo.map((tipo) => (
            <span className="text-xl">
              {tipo?.replace(tipo[0], tipo[0].toUpperCase())}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
  )
}
