// import { Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./fonts.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import JournalList from "./components/JournalList";
import TodoList from "./components/TodosList";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
// import JournalDetail from "./components/JournalDetail";
import JournalForm from "./components/JournalForm";
import TodoForm from "./components/TodoForm";
import About from "./components/About";
function App() {
  return (
    <AuthProvider baseUrl="http://localhost:8000">
      <BrowserRouter>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="journals" element={<JournalList />} />
            {/* <Route path="journals/:journal_id" element={<JournalDetail />} /> */}
            <Route path="journalform" element={<JournalForm />} />
            <Route path="todos" element={<TodoList />} />
            <Route path="todoform" element={<TodoForm />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
