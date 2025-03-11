import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "routes";
import ReactGA from "react-ga4";

const TRACKING_ID = "AW-11453395597";
ReactGA.initialize(TRACKING_ID);

const App = () => <RouterProvider router={routes} />;

export default App;
