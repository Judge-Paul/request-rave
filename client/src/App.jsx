import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import RequestPage from "./pages/RequestPage";
import NotFoundPage from "./pages/NotFoundPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import io from "socket.io-client";
import axios from 'axios';

export default function App() {
  const CLIENT_ID=`${import.meta.env.VITE_CLIENT_ID}`
  const CLIENT_SECRET=`${import.meta.env.VITE_CLIENT_SECRET}`
  const [accessToken, setAccessToken] = useState("")
  const socket = io.connect(`${import.meta.env.VITE_REACT_APP_SERVER_URL}`)

  useEffect(() => {
    const fetchAccessToken = async () => {
      const authParameters = {
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      };
      try {
        const response = await axios.post('https://accounts.spotify.com/api/token', authParameters, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchAccessToken();
  }, []);
  
  return  (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage socket={socket} accessToken={accessToken} />} />
          <Route path="/request" element={<RequestPage socket={socket} accessToken={accessToken} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}