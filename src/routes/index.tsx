import { createBrowserRouter } from "react-router-dom";
import About from "screens/about";
import Home from "screens/home";
import FAQ from "screens/faq";
import NotFound from "screens/notFound";
import Eingaben from "screens/eingaben";
import PrivacyPolicy from "screens/privacyPolicy";
import TermsAndConditions from "screens/termsAndCondition";
import CancellationPolicy from "screens/cancelationPolicy";
import Impressum from "screens/impressum";
import Layout from "layouts/main";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "eingaben",
        element: <Eingaben />,
      },
      {
        path: "privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "termsAndCondition",
        element: <TermsAndConditions />,
      },
      {
        path: "cancelationPolicy",
        element: <CancellationPolicy />,
      },
      {
        path: "contact",
        element: <Eingaben />,
      },
      {
        path: "impressum",
        element: <Impressum />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
