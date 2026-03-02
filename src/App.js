import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [active, setActive] = useState("Monitoring");

  return (
    <div className="layout">
      <Sidebar active={active} setActive={setActive} />
      <div className="main">
        <Header title={active} />
        <Dashboard section={active} />
      </div>
    </div>
  );
}

export default App;
