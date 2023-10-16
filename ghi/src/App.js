// import { Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
// import JournalList from "./components/JournalList";
import Nav from "./Nav";
// import UserInfo from "./components/UserInfo";

function App() {
  return (
    <AuthProvider baseUrl="http://localhost:8000">
      <BrowserRouter>
        <Nav />
        <div>
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            {/* <Route path="userinfo" element={<UserInfo />} /> */}
            {/* <Route path="journals" element={<JournalList />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
