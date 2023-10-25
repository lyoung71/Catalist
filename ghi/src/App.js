import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import UserPage from "./components/UserPage";
import JournalList from "./components/JournalList";
import CalendarComp from "./components/CalendarComp";
import JournalForm from "./components/JournalForm";
import Footer from "./components/Footer";


function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');
  return (
    <AuthProvider baseUrl="http://localhost:8000">
      <BrowserRouter basename={basename}>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
          <Route path="user" element={<UserPage />}/>
            <Route path="journals" element={<JournalList />} />
            <Route path="journalform" element={<JournalForm/>} />
            <Route path="calendar" element={<CalendarComp />} />
          </Routes>
      <Footer />
          <Footer/>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
