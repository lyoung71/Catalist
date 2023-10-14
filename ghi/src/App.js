// import { Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import JournalList from "./components/JournalList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider baseUrl="http://localhost:3000">
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="journals" element={<JournalList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
