import GoogleLogin from "./GoogleLogin";

const GoogleTest = () => {
  const onGoogleSignIn = () => {
    console.log("hi");
  };
  return <GoogleLogin onGoogleSignIn={onGoogleSignIn} />;
};

export default GoogleTest;
