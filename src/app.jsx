import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainRouter from "./router/MainRouter";

const AppCounter = () => {
  const [count, setCount] = useState(0);

  const handleSumar = () => {
    setCount(count + 1);
  };

  const handleRestar = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <NavBar />
      <MainRouter/>
      <ItemListContainer greeting="Bienvenidos a LauXpress, tu lugar"/>
    </div>
  );
};

export default AppCounter;