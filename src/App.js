import React from "react";
import "./styles.css";

import Navbar from "./Componentes/Navbar/Navbar";
import Tasklist from "./Componentes/Tasklist/Tasklist";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Tasklist title="Pendente" />
        <Tasklist title="Fazendo" />
        <Tasklist title="Completo" />
      </div>
    </div>
  );
}
