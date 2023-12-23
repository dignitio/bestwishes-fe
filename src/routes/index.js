import AuthGuard from "guards/AuthGuard";
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
      children: [],
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard>
          <div> dashboard layout</div>
        </AuthGuard>
      ),
      children: [
        {
          element: <div>hello</div>,

          index: true,
        },
        {
          element: <Tribute />,

          path: "tribute",
        },
      ],
    },
  ]);
}

// const Dashboard = Loadable(lazy(() => import("/")));
const Tribute = Loadable(lazy(() => import("../pages/Dashboard/Tribute")));
