import React, { useState } from "react";
// import { Label, TextInput, Checkbox, Button } from "flowbite-react";

export default function Home() {
  const numeroStorage = JSON.parse(localStorage.getItem("numerito"));

  const [input, setInput] = useState({});
  const [numerito, setNumerito] = useState(numeroStorage.numero);

  function sumar1(e) {
    e.preventDefault();
    const objetoAGuardar = {
      numero: numerito + 1,
    };

    setNumerito(numerito + 1);
    localStorage.setItem("numerito",JSON.stringify(objetoAGuardar) )
    // setNumerito();
  }

  return (
    <div className="flex flex-col justify-center items-center h-full  mt-5 ml-5">
      {/* ----------- */}

      <div className="flex flex-col justify-center items-center bg-blue-500  w-96  font-bold">
        <p className="text-5xl">Tu último numero de sesión fue el  {numerito}</p>
        <button
          className="bg-gray-300 rounded-lg p-5"
          onClick={(e) => sumar1(e)}
        >
          sumar por 1
        </button>
      </div>
    </div>
  );
}
