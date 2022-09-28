import "./App.css";
import { Routes, Route } from "react-router-dom";

// 메인
import Home from "./pages/Main/Home";

// 로그인
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import GoogleIntro from "./pages/OauthLogin/GoogleIntro";

// 일기 작성
import DiaryStart from "./pages/Diary/DiaryStart";
import DiaryKeyword from "./pages/Diary/DiaryKeyword";
import DiaryWriting from "./pages/Diary/DiaryWriting";
import DiaryCheck from "./pages/Diary/DiaryCheck";
import DiaryEnd from "./pages/Diary/DiaryEnd";

// 회원 정보
import MypageMain from "./pages/Mypage/Mypage.Main";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";

// 학습
import Education from "./pages/education/Education";
import Quiz from "./pages/education/Quiz";

// NotFound
import NotFound from "./pages/error/NotFound";
import DiaryTest from "./pages/OauthLogin/DiaryTest";

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
          <Route path="/googleintro" element={<GoogleIntro />} />

          {/* 문장, 단어 */}
          <Route path="/:category" element={<Education />} />
          <Route path="/:category/quiz" element={<Quiz />} />

          {/* 일기 작성 */}
          <Route path="/diarystart" element={<DiaryStart />} />
          <Route path="/diarykeyword" element={<DiaryKeyword />} />
          <Route path="/diarywriting" element={<DiaryWriting />} />
          <Route path="/diarycheck" element={<DiaryCheck />} />
          <Route path="/diaryend" element={<DiaryEnd />} />

          {/* 회원 정보 */}
          <Route path="/mypage" element={<MypageMain />} />
          <Route path="/profileedit" element={<ProfileEdit />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
          <Route path="/dtest" element={<DiaryTest />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
