import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { buscarDetalle } from "../../Controllers/api";

export default function Detail() {
  const { id } = useParams("id");
  const [detail, setDetail] = useState({});

  useEffect(() => {
    buscarDetalle(id).then((res) => setDetail(res));
  }, []);

  console.log(detail);
  return (
    <div id="login" className="">
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl">
          {" "}
          {detail.nombre?.replace(
            detail.nombre[0],
            detail.nombre[0].toUpperCase()
          )}
        </h1>
        <img src={detail.imagen} alt="" className="" />

        <div className="flex flex-col items-center justify-center  border border-red-300 rounded-lg ">
          <h3 className="text-lg font-semibold">Tipo: </h3>
          <div>
            {detail.tipo?.map((tipo) => (
              <span key={detail.id} className="text-xl">
                {tipo.replace(tipo[0], tipo[0].toUpperCase())}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
