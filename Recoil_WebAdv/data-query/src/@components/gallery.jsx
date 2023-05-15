import React, { useEffect } from "react";
import frame from "../assets/frame.svg";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Gallery(props) {
  const { no, author, material, name, coverThumb } = props;
  const navigate = useNavigate();
  function moveToDetail(no) {
    console.log(no);
    navigate(`/${no}`);
  }

  return (
    <GalleryWrapper>
      <ImgWrapper onClick={() => moveToDetail(no)}>
        <Frame src={frame} alt="프레임" />
        <Img src={coverThumb} alt={name} />
      </ImgWrapper>
      <InfoBox>
        <p>작품명 | {name}</p>
        <p>작가 | {author}</p>
        <p>재료 | {material}</p>
      </InfoBox>
    </GalleryWrapper>
  );
}

const GalleryWrapper = styled.article`
  width: 35rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Frame = styled.img`
  width: 30rem;
  height: 40rem;
  background-color: #bf2420;
`;

const Img = styled.img`
  position: absolute;
  width: 20rem;
  height: 24rem;
  margin: 8rem 0 0 -25rem;
`;

const ImgWrapper = styled.div`
  width: 30rem;
  height: 40rem;
  cursor: pointer;

  background-color: white;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: 10rem;
  background-color: #e2e2e2;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 99;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  ${({ theme }) => theme.fonts.text}
`;
