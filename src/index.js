//Importar Librerías
import React from "react";
import ReactDOM from "react-dom/client";

//Importar App de App.js
import App from "./App";

//Importar index.css
import './index.css'

//)Obtener una referencia al div con id root
const el = document.getElementById("root");


//)Le decimos a React que tome control del elemento
const root = ReactDOM.createRoot(el);

// Mostrar el componente en pantalla
root.render(<App/>);
