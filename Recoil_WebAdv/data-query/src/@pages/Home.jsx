import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <EntranceBtn onClick={() => navigate("/art")}>미술관 입장</EntranceBtn>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const btnStyle = keyframes`
	//단계 별로 변화를 주는 코드
	0%{
    	transform: scale(1);
    }
    50%{
    	transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
`;

export const EntranceBtn = styled.button`
  width: 20rem;
  height: 10rem;

  background-color: #ffd700;
  color: white;

  font: inherit;
  font-size: 3rem;
  font-weight: 600;

  animation: ${btnStyle} 1.5s infinite;
`;
export default Home;
