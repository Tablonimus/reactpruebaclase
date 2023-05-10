import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/home/Home";
import Detail from "./Screens/detail/Detail";
import Profile from "./Screens/profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

export default function App() {
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
