import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import AuthLayout from "layout/AuthLayout";
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
          element: <Profile />,
          path: "profile",
        },
        {
          element: <BankDetails />,
          path: "bank",
        },
        {
          element: <Security />,
          path: "security",
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
const Profile = Loadable(lazy(() => import("../pages/Profile")));
const BankDetails = Loadable(lazy(() => import("../pages/Bank")));
const Security = Loadable(lazy(() => import("../pages/Security")));
const Support = Loadable(lazy(() => import("../pages/Support")));
const Home = Loadable(lazy(() => import("../pages/Home")));
