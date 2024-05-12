import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes, { basename: "/futuristic" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
