import "./App.css";
import NavBar from "./Components/NavBar/NavBar"; //importo
import Footer from "./Components/Footer/Footer";

function App() {
  const data = [
    { firstName: "Lautaro", lastName: "Martin" }, //0
    { firstName: "Pablo", lastName: "Acuña" },
    { firstName: "Marcos", lastName: "Samudio" },
  ];

  const saludo = "Hola Mundo como estan?";//

  return (
    <div className="App">
      <NavBar />
      <div>{saludo}</div>
      <div>{data[0].firstName}</div>
      <Footer />
    </div>
  );
}

export default App;
