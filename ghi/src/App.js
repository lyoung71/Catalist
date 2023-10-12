import { Outlet } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";

function App() {
  return (
    <AuthProvider baseUrl="http://localhost:3000">
      <Outlet />
    </AuthProvider>
  );
}

export default App;
