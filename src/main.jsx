import React from "react";
import ReactDOMClient from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";



const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
   </React.StrictMode> 
    
    
);
