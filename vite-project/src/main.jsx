import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import "./index.css";
// import Pr5 from "./pr5/pr5";
// import Pr3 from "./Pr3";
// import Pr4 from "./pr4/Pr4";
import Pr6 from "./pr6/Pr6";
import { store } from "./pr6/redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* <Pr3 /> */}
    {/* <Pr4 /> */}
    {/* <Pr5 /> */}
    {/* <Provider store={store}> */}
      <Pr6 />
    {/* </Provider> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);
