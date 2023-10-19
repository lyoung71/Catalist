import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import UserInfo from "./components/UserInfo";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="info" element={<UserInfo />} />
        </Route>
    )
);

export default router;
