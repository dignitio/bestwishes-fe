import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import AuthLayout from "layout/AuthLayout";
import Layout from "layout/DashboardLayout/Layout";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks
const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<>loading</>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [
        {
          element: <div> login page </div>,
          path: "login",
        },
        {
          element: <div> register </div>,
          path: "register",
        },
        {
          element: <div> forgot password </div>,
          path: "forgot-password",
        },
        {
          element: <div> reset password </div>,
          path: "reset-password",
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard>
          <Layout />
        </AuthGuard>
      ),
      children: [
        {
          element: <div>dashboard</div>,
          index: true,
        },
        {
          element: <Tribute />,
          path: "tribute",
        },
        {
          element: <div>create card</div>,
          path: "create-card",
        },
        {
          element: <div>settings</div>,
          path: "settings",
        },
        {
          element: <div>support</div>,
          path: "support",
        },
      ],
    },
  ]);
}

// const Dashboard = Loadable(lazy(() => import("/")));
const Tribute = Loadable(lazy(() => import("../pages/Tribute")));
