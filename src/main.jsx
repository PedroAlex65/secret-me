import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CreateGlobalStyle from "./styles/globalStyles.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddLink from "./container/AddLink.jsx";
import Error from "./container/Error.jsx";
import Footer from "./container/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateGlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="createLink" element={<AddLink />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

{
  /* <App />
    <CreateGlobalStyle /> */
}
