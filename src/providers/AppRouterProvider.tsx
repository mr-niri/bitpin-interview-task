import AppLayout from "layouts/AppLayout";
import DashboardLayout from "layouts/DashboardLayout";
import { lazy, type FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const ErrorPage = lazy(() => import("pages/error"));
const HomePage = lazy(() => import("pages/home"));
const Markets = lazy(() => import("pages/Markets"));
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Markets/>
          }
        ]
      }
    ]
  }
]);

const AppRouterProvider: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
