import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import { Toaster } from "react-hot-toast";
import Protected from "./utils/Protected.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedAuth from "./utils/ProtectedAuth.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path=""
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <ProtectedAuth>
            <Login />
          </ProtectedAuth>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedAuth>
            <Register />
          </ProtectedAuth>
        }
      />
    </>
  )
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>
);
