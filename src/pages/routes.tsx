import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./errorPage";
import RootPage from "./rootPage";
import { ERouteNames } from "@/shared";

const PaymentPage = lazy(() => import("@pages/paymentPage"));

export const routes = createBrowserRouter([
  {
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PaymentPage />,
        path: ERouteNames.PAYMENT_PAGE,
      },
    ],
  },
]);
