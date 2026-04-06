import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout/Layout";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useGetMeQuery } from "./redux/api/authApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthChecked, setUser } from "./redux/app/authSlice";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

const App = () => {
  const { data, isLoading } = useGetMeQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if (!isLoading) {
      dispatch(setAuthChecked());
    }
  }, [data]);
  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  return <RouterProvider router={routes} />;
};

export default App;
