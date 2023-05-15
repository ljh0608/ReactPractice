import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { EntranceBtn } from "./Home";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorPageWrapper>
      <ErrorText>ErrorPage</ErrorText>
      <BackButton onClick={() => navigate("/")}>홈으로 돌아가기</BackButton>
    </ErrorPageWrapper>
  );
};

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;
  height: 100vh;
  gap: 3rem;
`;
const ErrorText = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  color: white;
`;

const BackButton = styled(EntranceBtn)`
  font-size: 2rem;
`;

export default ErrorPage;
