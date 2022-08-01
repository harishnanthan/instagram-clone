// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import { memo } from "react";

import Home from "./components/Home";

import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
