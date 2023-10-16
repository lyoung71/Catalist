import React from "react"
import  ReactDOM  from "react"
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Router.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router = {router} />
    </React.StrictMode>
)
