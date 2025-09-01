import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home.jsx";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
