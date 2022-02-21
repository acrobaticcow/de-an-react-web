import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="shop" element={<Shop/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
