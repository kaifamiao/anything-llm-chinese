import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@/App.jsx";
import "@/index.css";
import Kfm from "@/kfm/Kfm.jsx";
import Head from "@/kfm/Head.jsx";
import Foot from "@/kfm/Foot.jsx";
const isDev = process.env.NODE_ENV !== "production";
const REACTWRAP = isDev ? React.Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>

    <Head />
    <REACTWRAP>
      <Router>
        <App />
      </Router>
    </REACTWRAP>
    <Foot />
    <Kfm></Kfm>
  </div>
);
