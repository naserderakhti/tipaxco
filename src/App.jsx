import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home.jsx";
import LoginPage from "./pages/Login.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
