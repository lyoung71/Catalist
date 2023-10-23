import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts.css";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import JournalList from "./components/JournalList";
import CalendarComp from "./components/CalendarComp";
import JournalForm from "./components/JournalForm";


function App() {
  return (
    <AuthProvider baseUrl="http://localhost:8000">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="journals" element={<JournalList />} />
          <Route path="calendar" element={<CalendarComp />} />
          <Route path="journalform" element={<JournalForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
