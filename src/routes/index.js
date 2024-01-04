import AuthLayout from "layout/AuthLayout";
import Register from "pages/Register";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "reset-password",
          element: <ResetPassword />
        }
      ],
    },
    {
      path: "/dashboard",
      children: [],
    },
  ]);
}
