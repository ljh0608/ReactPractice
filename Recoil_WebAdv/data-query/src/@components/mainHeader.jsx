import styled from "styled-components";

export default function MainHeader() {
  return (
    <Header>
      <TitleWrapper>
        <Title>이중섭 미술관</Title>
      </TitleWrapper>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme.colors.skyblue};
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.title};
`;

const TitleWrapper = styled.div`
  height: 5rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  gap: 2rem;
`;

const BtnSelect = styled.button`
  width: 10rem;
  height: 4rem;
  background-color: navy;
  color: white;

  font: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 7px;
  border: 1px solid #ffd700;
`;
