import { useState } from "react";
const EduTest = () => {
  const [data, setData] = useState([]);
  const submitData = () => {
    setData((data) => [...data, "check"]);
  };

  const handleSubmit = async () => {
    console.log(data);
  };
  // console.log(data);
  return (
    <>
      <button onClick={submitData}>check</button>
      <button onClick={handleSubmit}>hihi</button>
    </>
  );
};

export default EduTest;
