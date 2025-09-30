import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "/", Component: Home},
      // { path: "/trainers", element: <AllTrainers /> },
      // { path: "/trainers/:id", element: <TrainerDetails /> },
      // { path: "/classes", element: <Classes /> },
      // { path: "/forum", element: <Forum /> },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    // path: "/dashboard",
    // element: (
    //   <PrivateRoute>
    //     <DashboardLayout />
    //   </PrivateRoute>
    // ),
    // children: [
    //   // Admin Routes
    //   { path: "admin", element: <AdminDashboard /> },
    //   { path: "admin/all-trainers", element: <AdminDashboard /> },
    //   { path: "admin/applied-trainers", element: <AdminDashboard /> },
    //   { path: "admin/newsletter", element: <AdminDashboard /> },
    //   { path: "admin/balance", element: <AdminDashboard /> },
    //   { path: "admin/add-class", element: <AdminDashboard /> },

    //   // Trainer Routes
    //   { path: "trainer", element: <TrainerDashboard /> },
    //   { path: "trainer/manage-slots", element: <TrainerDashboard /> },
    //   { path: "trainer/add-slot", element: <TrainerDashboard /> },
    //   { path: "trainer/add-forum", element: <TrainerDashboard /> },

    //   // Member Routes
    //   { path: "member", element: <MemberDashboard /> },
    //   { path: "member/activity-log", element: <MemberDashboard /> },
    //   { path: "member/profile", element: <MemberDashboard /> },
    //   { path: "member/booked-trainer", element: <MemberDashboard /> },
    // ],
  },
]);
