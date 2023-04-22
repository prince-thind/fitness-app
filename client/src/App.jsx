import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Programs from "./pages/Programs.jsx";
import Program from "./pages/Program.jsx";
import CreateProgram from "./pages/CreateProgram.jsx";
import UpdateProgram from "./pages/UpdateProgram.jsx";
import Exercises from "./pages/Exercises.jsx";
import CreateExercise from "./pages/CreateExercise.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/programs/:id",
        element: <Program />,
      },
      {
        path: "/programs/create/",
        element: <CreateProgram />,
      },
      {
        path: "/programs/update/:id",
        element: <UpdateProgram />,
      },
      {
        path: "/exercises",
        element: <Exercises />,
      },

      {
        path: "/exercises/create/",
        element: <CreateExercise />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
