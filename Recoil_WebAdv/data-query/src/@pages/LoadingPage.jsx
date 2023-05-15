import React from "react";
import styled, { keyframes } from "styled-components";
const LoadingPage = () => {
  return (
    <LoadingPageWrapper>
      <Progress>
        <ProgressColor></ProgressColor>
      </Progress>
    </LoadingPageWrapper>
  );
};
const loading = keyframes`

    0%{
      width: 0%;
    }
    25%{
        width: 50%;
    }
    50%{
        width: 75%;
    }
    75%{
        width: 85%;
    }
    100%{
        width: 100%;
    }

`;
const LoadingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;
  height: 100vh;
`;
const Progress = styled.div`
  position: relative;
  height: 10px;
  width: 30%;
  border: 10px solid #f4a261;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;
const ProgressColor = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 0px;
  height: 10px;
  border-radius: 15px;
  animation: ${loading} 4s infinite linear;
`;

export default LoadingPage;
