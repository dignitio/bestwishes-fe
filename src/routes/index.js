import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import AuthLayout from "layout/AuthLayout/Layout";
import Layout from "layout/DashboardLayout/Layout";
import MainLayout from "layout/MainLayout";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
// eslint-disable-next-line react-hooks/rules-of-hooks
const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<div className="text-3xl text-slate-400 mt-8 ml-12">Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [
        {
          element: <Login/>,
          path: "login",
        },
        {
          element: <Register/>,
          path: "register",
        },
        {
          element: <div> forgot password </div>,
          path: "forgot-password",
        },
        {
          element: <ResetPassword/>,
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
          element: <Dashboard />,
          index: true,
        },
        {
          element: <Tribute />,
          path: "tribute",
        },
        {
          element: <CreateCard />,
          path: "create-card",
        },
        {
          element: <Settings />,
          path: "settings",
        },
        {
          element: <Support />,
          path: "support",
        },
      ],
    },
    {
      path: "/",
      element: (
        <MainLayout />
      ),
      children: [
        {
          element: <Home />,
          index: true,
        }
      ],
    },
  ]);
}

const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const Tribute = Loadable(lazy(() => import("../pages/Tribute")));
const CreateCard = Loadable(lazy(() => import("../pages/CreateCard")));
const Settings = Loadable(lazy(() => import("../pages/Settings")));
const Support = Loadable(lazy(() => import("../pages/Support")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const Register = Loadable(lazy(() => import("../pages/Register")));
const ResetPassword = Loadable(lazy(() => import("../pages/ResetPassword")));
