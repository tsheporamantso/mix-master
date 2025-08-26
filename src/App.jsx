import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
} from "./pages/index";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <SinglePageError />,
        },
        {
          path: "cocktail/:id",
          element: <Cocktail />,
          loader: singleCocktailLoader,
          errorElement: <SinglePageError />,
        },
        {
          path: "newsletter",
          element: <NewsLetter />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
