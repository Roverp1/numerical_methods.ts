import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";

import App from "./app/App.tsx";
import PageBisection from "./pages/PageBisection/PageBisection.tsx";
import PageInterpolation from "./pages/PageInterpolation/PageInterpolation.tsx";

import "./main.scss";
import PageLagrangeInterpolation from "./pages/PageLagrangeInterpolation/PageLagrangeInterpolation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PageBisection /> },
      { path: "interpolation", element: <PageInterpolation /> },
      {
        path: "lagrange-interpolation",
        element: <PageLagrangeInterpolation />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
