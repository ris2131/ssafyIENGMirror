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
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    // 여기서 api 요청하는 거를 보내야함
  };
  return <GoogleLogin onGoogleSignIn={onGoogleSignIn} />;
};

export default GoogleTest;
