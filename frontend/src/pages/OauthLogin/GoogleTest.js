import GoogleLogin from "./GoogleLogin";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../redux/AuthSlice";

const GoogleTest = () => {
  const dispatch = useDispatch();
  const onGoogleSignIn = async (res) => {
    const { credential } = res;
    const data = {
      id_token: credential,
    };
    dispatch(googleLogin(data))
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));

    // 여기서 status로 1차거르고 data보고 null이면 navigate intro 해서 처리하고 null 아니면 ㄱㄱ
  };
  return <GoogleLogin onGoogleSignIn={onGoogleSignIn} />;
};

export default GoogleTest;
