import { authApi } from "../../shared/authApi";

const DiaryTest = () => {
  const handleSubmit = () => {
    const data = {
      picture_path: "/picture/214_12525.jpg",
      content: "노현우의 테스트",
      emotion: "happy",
      keywords: [{ keyword: "apple" }, { keyword: "banana" }],
    };

    authApi
      .test(data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return <button onClick={handleSubmit}>test</button>;
};

export default DiaryTest;
