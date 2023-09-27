import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import Navbar from "./components/Navbar";
import AllData from "./components/AllData";
import AddData from "./components/AddData";
import UpdateData from "./components/UpdateData";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exect path="/" element={<AllData />} />
        <Route exect path="/add" element={<AddData />} />
        <Route path="/update/:id" element={<UpdateData />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
