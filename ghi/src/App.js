import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import SignupForm from './components/SignUpForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPage";


function App() {

  return (
    <AuthProvider baseUrl="http://localhost:8000">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginForm />}/>
          <Route path="/signup" element={<SignupForm />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
