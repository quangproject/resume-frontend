import "./App.css";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ResumePage from "./pages/resume/ResumePage";
import ProjectPage from "./pages/project/ProjectPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/resume",
      element: <ResumePage />,
    },
    {
      path: "/project",
      element: <ProjectPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ]);

  return router;
}

export default App;
