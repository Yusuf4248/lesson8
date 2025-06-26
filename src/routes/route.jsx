import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import SignIn from "../page/auth/SignIn";
import SignUp from "../page/auth/SignUp";
import Logs from "../page/logs/Index";
import Driver from "../page/logs/Driver";
import Statistics from "../page/logs/Statistics";
import Students from "../page/logs/Students";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="logs" element={<Logs />}>
          <Route path="driver" element={<Driver />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
