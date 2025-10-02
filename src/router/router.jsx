import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Forbidden from "../pages/forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";
import TrainerRoute from "../routes/TrainerRoute";
import MemberRoute from "../routes/MemberRoute";
import PrivateRoute from "../routes/PrivateRoute";

export const router = createBrowserRouter([
  // 🌐 Public Routes
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/classes", element: <Classes /> },
      // { path: "/trainers", element: <Trainers /> },
      // { path: "/trainer/:id", element: <TrainerDetails /> },
      // { path: "/forum", element: <Forum /> },
      // { path: "/forbidden", element: <Forbidden /> },
    ],
  },

  // 🔑 Auth Routes
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  // 🪪 Dashboard Routes (Private + Role Based)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // ========================
      // Admin Routes
      // ========================
      {
        path: "admin",
        element: (
          <AdminRoute>
            {/* <AdminDashboard /> */}
          </AdminRoute>
        ),
      },
      {
        path: "admin/all-trainers",
        element: (
          <AdminRoute>
            {/* <AllTrainers /> */}
          </AdminRoute>
        ),
      },
      {
        path: "admin/applied-trainers",
        element: (
          <AdminRoute>
            {/* <AppliedTrainers /> */}
          </AdminRoute>
        ),
      },
      {
        path: "admin/newsletter",
        element: (
          <AdminRoute>
            {/* <Newsletter /> */}
          </AdminRoute>
        ),
      },
      {
        path: "admin/balance",
        element: (
          <AdminRoute>
            {/* <Balance /> */}
          </AdminRoute>
        ),
      },
      {
        path: "admin/add-class",
        element: (
          <AdminRoute>
            {/* <AddClass /> */}
          </AdminRoute>
        ),
      },

      // ========================
      // Trainer Routes
      // ========================
      {
        path: "trainer",
        element: (
          <TrainerRoute>
            {/* <TrainerDashboard /> */}
          </TrainerRoute>
        ),
      },
      {
        path: "trainer/manage-slots",
        element: (
          <TrainerRoute>
            {/* <ManageSlots /> */}
          </TrainerRoute>
        ),
      },
      {
        path: "trainer/add-slot",
        element: (
          <TrainerRoute>
            {/* <AddSlot /> */}
          </TrainerRoute>
        ),
      },
      {
        path: "trainer/add-forum",
        element: (
          <TrainerRoute>
            {/* <AddForum /> */}
          </TrainerRoute>
        ),
      },

      // ========================
      // Member Routes
      // ========================
      {
        path: "member",
        element: (
          <MemberRoute>
            {/* <MemberDashboard /> */}
          </MemberRoute>
        ),
      },
      {
        path: "member/activity-log",
        element: (
          <MemberRoute>
            {/* <ActivityLog /> */}
          </MemberRoute>
        ),
      },
      {
        path: "member/profile",
        element: (
          <MemberRoute>
            {/* <Profile /> */}
          </MemberRoute>
        ),
      },
      {
        path: "member/booked-trainer",
        element: (
          <MemberRoute>
            {/* <BookedTrainer /> */}
          </MemberRoute>
        ),
      },
      {
        path: "member/payment",
        element: (
          <MemberRoute>
            {/* <Payment /> */}
          </MemberRoute>
        ),
      },
      {
        path: "member/be-a-trainer",
        element: (
          <MemberRoute>
            {/* <BeATrainer /> */}
          </MemberRoute>
        ),
      },
    ],
  },
  {
    path: "/forbidden",
    Component: Forbidden,
  },
]);
