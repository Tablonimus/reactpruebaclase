import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/home/Home";
import Detail from "./Screens/detail/Detail";
import Footer from "./Components/Footer/Footer";
import Main from "./Screens/main/Main";
import Create from "./Screens/create/Create";

export default function App() {
  //localstorage.setItem("clave","valor") //el valor tiene que ser string
  //Para convertir a string uso JSON.stringify(nombreDeLaVariable)
  //

  //localstorage.getItem("clave") //debemos almacenarlo en una variable lo que queremos del localstorage
  //esa variable debo convertirla a dato JS: y para eso usamos JSON.parse(variableCreada)
  // ejemplo en una sola linea : JSON.parse(localStorage.getItem("numerito"));
  //localstorage.removeItem("clave") //se hace para eliminar algo del local storage

  return (
    <BrowserRouter>
      <div id="login" className="flex flex-col h-screen justify-between">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/pokemon"} element={<Main />} />
          <Route path={"/pokemon/:id"} element={<Detail />} />
          <Route path={"/pokemon/create"} element={<Create />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
