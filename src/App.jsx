import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
} from "./pages/index";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <h2>Home page</h2>,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
