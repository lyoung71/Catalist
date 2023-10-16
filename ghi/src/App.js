import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navone from "./components/Navone";
import JournalForm from './components/JournalForm';
import EditPost from "./components/test";

function App() {
  return (
    <BrowserRouter>
      <Navone />
      <div>
        <Routes>
          {/* <Route path="userinfo" element={<UserInfo />} /> */}
          <Route path="/journals" element={<JournalForm />} />
          <Route path="/test" element={<EditPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
