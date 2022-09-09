import "./App.css";
import { Routes, Route } from "react-router-dom";

// NavBar
import NavBar from "./components/NavBar";

// 메인
import Home from "./pages/Main/Home";

// 로그인
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// 일기 작성
import DiaryStart from "./pages/Diary/DiaryStart";
import DiaryKeyword from "./pages/Diary/DiaryKeyword";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <BrowserRouter>
          <Routes>

            {/* 메인 */}
            <Route path="/" element={<Home />} />

            {/* 로그인 */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

            {/* 일기 작성 */}
            <Route path="/diarystart" element={<DiaryStart />} />
            <Route path="/diarykeyword" element={<DiaryKeyword />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
