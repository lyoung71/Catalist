import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './fonts.css';
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  
  const baseUrl = process.env.REACT_APP_API_HOST
  
  return (
    <div>
      <AuthProvider baseUrl={baseUrl}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;
