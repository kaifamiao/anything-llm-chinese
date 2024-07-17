import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@/App.jsx";
import "@/index.css";
import Kfm from "@/kfm/Kfm.jsx";
import Header from "@/kfm/Header.jsx";
import Footer from "@/kfm/Footer.jsx";
const isDev = process.env.NODE_ENV !== "production";
const REACTWRAP = isDev ? React.Fragment : React.StrictMode;


ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <REACTWRAP>
      <Router>
        <App />
      </Router>
    </REACTWRAP>
    <Footer />
    <Kfm></Kfm>
  </div>
);
