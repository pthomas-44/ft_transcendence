import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Auth from "./routes/Auth";

export const router = createBrowserRouter([
{
    path: "/",
    element: <App hasToken={localStorage.getItem('token') !== null} />,
},
{
    path: "/auth",
    element: <Auth />,
},
]);
