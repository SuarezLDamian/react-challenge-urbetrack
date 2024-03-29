import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home.tsx";
import Login from "@pages/Login.tsx";
import MyImages from "@pages/MyImages.tsx";
import ImageDetail from "@pages/ImageDetail.tsx";
import ErrorPage from "@pages/ErrorPage.tsx";
import ProtectedRoute from "@components/RouteHandling/ProtectedRoute";
import AnonymousRoute from "@components/RouteHandling/AnonymousRoute";

const router = createBrowserRouter([

  {
    element: <AnonymousRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-images",
        element: <MyImages />,
      },
      {
        path: "/image/:imageId",
        element: <ImageDetail />,
      },
    ]
  },
]);

export default router;