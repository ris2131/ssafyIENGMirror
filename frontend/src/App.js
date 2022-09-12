import "./App.css";
import { Routes, Route } from "react-router-dom";

// 메인
import Home from "./pages/Main/Home";

// 로그인
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// 일기 작성
import DiaryStart from "./pages/Diary/DiaryStart";
import DiaryKeyword from "./pages/Diary/DiaryKeyword";
import Education from "./pages/education/Education";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<Home />} />

          {/* 로그인 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* 문장, 단어 */}
          <Route path="/edu/:category" element={<Education />} />

          {/* 일기 작성 */}
          <Route path="/diarystart" element={<DiaryStart />} />
          <Route path="/diarykeyword" element={<DiaryKeyword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
