import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { buscarDetalle } from "../../Controllers/api";

export default function Detail() {
  const paramId = useParams("id");
  const [detail, setDetail] = useState({});

  useEffect(() => {
    buscarDetalle(paramId.id).then((res) => setDetail(res));
  }, []);

  console.log(detail);

  return (
    <div id="login" className="">
      <NavBar />
      <div>
        <img src={detail.imagen} alt="" className="" />
      </div>
    </div>
  );
}
