import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import WeatherSearch from "./pages/weatherSearchBar/WeatherSearch";
import WeatherDetail from "./pages/weatherSearchBar/WeatherDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WeatherSearch />,
  },
  {
    path: "/:lats",
    element: <WeatherDetail />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
