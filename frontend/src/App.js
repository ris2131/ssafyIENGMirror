import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// NavBar
// import NavBar from "./components/NavBar";

// 로그인
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

// 일기 작성
import DiaryStart from "./pages/Diary/DiaryStart";
import DiaryKeyword from "./pages/Diary/DiaryKeyword";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* 로그인 */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

            {/* 일기 작성 */}
            <Route path="/diarystart" element={<DiaryStart />}></Route>
            <Route path="/diarykeyword" element={<DiaryKeyword />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
