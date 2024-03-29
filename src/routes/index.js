import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import AuthLayout from "layout/AuthLayout/Layout";
import Layout from "layout/DashboardLayout/Layout";
import MainLayout from "layout/MainLayout";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import GuestLayout from "layout/GuestpageLayout/TheLayout";


const Loadable = (Component) => (props) => {
 

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
          element: <EditTribute />,
          path: "tribute/edit",
        },
        {
          element: <Wishlist />,
          path: "wishlist",
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
        <GuestGuard>
          <GuestLayout/>
        </GuestGuard>
      ),
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <About />,
          path: "about"
        },
        {
          element: <Features />,
          path: "features",
        }
      ],
    },
  ]);
}

const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const Tribute = Loadable(lazy(() => import("../pages/Tribute")));
const EditTribute = Loadable(lazy(() => import("../pages/EditTribute")));
const Wishlist = Loadable(lazy(() => import("../pages/Wishlist")));
const CreateCard = Loadable(lazy(() => import("../pages/CreateCard")));
const Settings = Loadable(lazy(() => import("../pages/Settings")));
const Profile = Loadable(lazy(() => import("../pages/Profile")));
const BankDetails = Loadable(lazy(() => import("../pages/Bank")));
const Security = Loadable(lazy(() => import("../pages/Security")));
const Support = Loadable(lazy(() => import("../pages/Support")));
const Home = Loadable(lazy(() => import("../pages/GuestPage/Home")));
const About = Loadable(lazy(() => import("../pages/GuestPage/About")));
const Features = Loadable(lazy(() => import("../pages/GuestPage/Features")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const Register = Loadable(lazy(() => import("../pages/Register")));
const ResetPassword = Loadable(lazy(() => import("../pages/ResetPassword")));
