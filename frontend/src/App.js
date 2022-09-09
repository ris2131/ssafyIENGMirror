import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
