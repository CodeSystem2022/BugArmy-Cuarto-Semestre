import React from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider";

const root = document.getElementById("root");

const rootElement = createRoot(root);

rootElement.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
