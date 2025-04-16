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
import MainLayout from "layouts/main";
import SecondaryLayout from "layouts/secondary";
import Submission from "screens/submission";
import Success from "screens/success";
import NotedeliverModify from "screens/modify";

const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      }
    ],
  },
  {
    path: "",
    element: <SecondaryLayout />,
    children: [
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
      {
        path: "submission",
        element: <Submission />,
      },
      {
        path: "notedelivermodify",
        element: <NotedeliverModify />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
