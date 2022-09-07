import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
// import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
