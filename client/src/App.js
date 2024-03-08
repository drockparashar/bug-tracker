import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBug from "./components/CreateBug";

function App() {
  return (
    <div className="root">
      {/* <Login></Login> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/createBug" element={<CreateBug />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
