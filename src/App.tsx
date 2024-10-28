import "./App.css";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ResumePage from "./pages/resume/ResumePage";

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
  ]);

  return router;
}

export default App;
