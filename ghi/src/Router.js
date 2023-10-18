import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import Calendar from "react-calendar";
import LandingPage from "./components/LandingPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<LandingPage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="calendar" element={<CalendarComp />} />
        </Route>
    )
);

export default router;
