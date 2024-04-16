import "./index.css";
import React from "react";
import { routes } from "./config/routes";
import { hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { reportWebVitals } from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes);
const domNode = document.getElementById("root");

hydrateRoot(
  domNode,
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

//                       (`.-,')
//                     .-'     ;
//                 _.-'   , `,-
//           _ _.-'     .'  /._
//         .' `  _.-.  /  ,'._;)
//        (       .  )-| (
//         )`,_ ,'_,'  \_;)
// ('_  _,'.'  (___,))
//  `-:;.-'

reportWebVitals();
