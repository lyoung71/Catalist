import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts.css";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import JournalList from "./components/JournalList";
<<<<<<< HEAD
// import CalendarComp from "./components/CalendarComp";
=======
import CalendarComp from "./components/CalendarComp";
import JournalForm from "./components/JournalForm";

>>>>>>> 9002b2cb70dccd162df8d6d89fef2b790c3f9e85

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
<<<<<<< HEAD
          {/* <Route path="calendar" element={<CalendarComp />} /> */}
=======
          <Route path="calendar" element={<CalendarComp />} />
          <Route path="journalform" element={<JournalForm />} />
>>>>>>> 9002b2cb70dccd162df8d6d89fef2b790c3f9e85
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
