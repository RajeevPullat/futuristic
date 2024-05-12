import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} baseName="/futuristic" />;
}

export default App;
