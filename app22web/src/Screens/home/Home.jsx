import React from "react";
import "../../Styles/style.css"; //IMPORTAMOS LOS CSS ASÍ
import banner from "../../Assets/Images/banner.png"; // a la imagen se la guarda en una variable
import egg from "../../Assets/Images/egg.png"; // a la imagen se la guarda en una variable
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; //IMPORTO SWEET ALERT2
import { Toast, HiFire } from "flowbite-react"; //importo componentes de Flowbite react

export default function Home() {
  const navigate = useNavigate();

  function loginHandler(e) {
    e.preventDefault(); //prevenimos que se recargue

    Swal.fire({
      title: "¿Aceptas nuestros terminos y condiciones?",
      text: "No te arrepentiras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0DD90A",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          navigate("/pokemon");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No puedes contiunar si no aceptas!",
        });
      }
    });
  }

  return (
    <div className="flex flex-col h-full items-center md:gap-16 lg:gap-10  p-5 ">
      <img src={banner} alt="" className="w-56 md:w-96 lg:w-96" />
      <form
        id="formulario"
        className="flex flex-col justify-center items-center w-72 h-72 lg:w-96 lg:h-96 rounded-full gap-16 bg-gray-300"
        action="submit"
        onSubmit={(e) => loginHandler(e)}
      >
        <input
          id="user"
          className="w-7/12 rounded-full bg-opacity-50 bg-[#FE3929] "
          type="text"
          placeholder="Usuario..."
        />
        <button
          type="submit"
          className="flex items-center justify-center ring w-16 h-16 rounded-full bg-white hover:bg-[#FE3929]"
        >
          {" "}
          <img src={egg} alt="" />{" "}
        </button>
        <input
          id="pass"
          className="w-7/12 rounded-full bg-opacity-50 bg-[#A1A1A1]"
          type="password"
          placeholder="Contraseña..."
        />
      </form>
    </div>
  );
}
