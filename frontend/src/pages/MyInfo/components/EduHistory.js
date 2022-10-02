import styled from "styled-components";

import { useState, useEffect } from "react";
import { diaryApi } from "../../../shared/diaryApi";

// const MyButton = styled.button`
//   border: 1px solid black;
//   border-radius: 10px;
//   padding: 8px;
//   background-color:
//   font-weight: bold;
//   margin-right: 10px;
// `;

const Container = styled.div`
  display: flex;
  justify-content: start;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  width: 50%;
  margin-top: 20px;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: start;
`;

const CategoryTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 40px;
  padding: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const EduHistory = ({ date }) => {
  const [category, setCategory] = useState("diary");
  const [initData, setInitData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await diaryApi.getdiary(date);
      setInitData(res.data.data);
      console.log(res.data);
    };
    getData();
  }, [date]);

  return (
    <Container>
      <CategoryBox>
        <CategoryTitle
          color={category === "diary" ? "" : "#bdbdbd"}
          onClick={() => setCategory("diary")}
        >
          다이어리
        </CategoryTitle>
        <CategoryTitle
          color={category === "edu" ? "" : "#bdbdbd"}
          onClick={() => setCategory("edu")}
        >
          학습내역
        </CategoryTitle>
      </CategoryBox>
      <img src={initData && initData.diaryPicturePath} alt="#"></img>
    </Container>
  );
};

export default EduHistory;
