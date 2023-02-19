import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import RequestPage from "./pages/RequestPage";
import NotFoundPage from "./pages/NotFoundPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import io from "socket.io-client"

export default function App() {
  const socket = io.connect("http://localhost:3001");
  return  (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage socket={socket} />} />
          <Route path="/request" element={<RequestPage socket={socket} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}