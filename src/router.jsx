import App from "./App.jsx";
import Profile from "./profile.jsx";
import ErrorPage from "./errorPage.jsx";
import Image from "./Image.jsx";
import { element } from "prop-types";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "profile/:name",
    element: <Profile />,
  },

  {
    path: "/image",
    element: <Image />,
  },
];

export default routes;
