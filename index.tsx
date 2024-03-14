import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./NavBar";
import App from "./src/App";

const rootElement = document.getElementById("root");
render(
<Router>
    <div>
      <NavBar /> {/* Render the NavBar component */}
        <App />
    </div>
</Router>,
rootElement
);