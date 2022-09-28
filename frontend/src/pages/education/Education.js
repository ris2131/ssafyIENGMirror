import NavBar from "../../components/NavBar";

import styled from "styled-components";
import EduContent from "./components/EduContent";

import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getdata } from "../../redux/EduSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.back};
  height: 100vh;
`;

const Education = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const [originData, setOriginData] = useState();

  const getInit = useCallback(() => {
    dispatch(getdata(category))
      .unwrap()
      .then((res) => {
        category === "word"
          ? setOriginData(res.data?.wordSet)
          : setOriginData(res.data?.sentenceSet);
      });
  }, [dispatch, category]);

  useEffect(() => {
    getInit();
  }, [getInit]);

  return (
    <>
      <Container back={category === "word" ? "#fef3ed" : "#FFFAC6"}>
        <NavBar />
        <EduContent category={category} originData={originData} />
      </Container>
    </>
  );
};

export default Education;
