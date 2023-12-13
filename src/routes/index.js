import AuthLayout from "layout/AuthLayout";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      children: [],
    },
    {
      path: "/dashboard",
      children: [],
    },
  ]);
}
