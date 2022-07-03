import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<AllUsers />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/edit/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
