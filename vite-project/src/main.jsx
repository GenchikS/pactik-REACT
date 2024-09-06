import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import "./index.css";
import Pr5 from "./pr5/pr5";
// import Pr3 from "./Pr3";
// import Pr4 from "./pr4/Pr4";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <Pr3 /> */}
      {/* <Pr4 /> */}
      <Pr5 />
    </BrowserRouter>
  </StrictMode>
);
