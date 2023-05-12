import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/home/Home";
import Detail from "./Screens/detail/Detail";
import Profile from "./Screens/profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const numerito = { numero: 5 };
  //localstorage.setItem("clave","valor") //el valor tiene que ser string
  //Para convertir a string uso JSON.stringify(nombreDeLaVariable)
  //

  //localstorage.getItem("clave") //debemos almacenarlo en una variable
  //esa variable debo convertirla a dato JS: y para eso usamos JSON.parse(variableCreada)
 // ejemplo en una sola linea : JSON.parse(localStorage.getItem("numerito"));
  //localstorage.removeItem("clave") //se hace para eliminar algo del local storage

  if (localStorage.getItem("numerito")) {
    const numeroGuardado = localStorage.getItem("numerito");
    console.log(JSON.parse(numeroGuardado));
  } else {
    localStorage.setItem("numerito", JSON.stringify(numerito));
  }

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/pokemon"} element={<Profile />} />
        <Route path={"/pokemon/:id"} element={<Detail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
