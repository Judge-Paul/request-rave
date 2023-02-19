import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import RequestPage from "./pages/RequestPage";
import NotFoundPage from "./pages/NotFoundPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return  (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}