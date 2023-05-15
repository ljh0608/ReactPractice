import { useState, useEffect } from "react";
import frame from "../assets/frame.svg";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";

import { gallerySelector } from "../Recoil/gallery/selector";

import { useRecoilValue } from "recoil";

export default function GalleryDetail() {
  const { detailId } = useParams();

  const gallery = useRecoilValue(gallerySelector(detailId));

  useEffect(() => {}, []);

  return (
    <GalleryWrapper>
      <GalleryDetailWrapper>
        <ImgWrapper>
          <Frame src={frame} alt="프레임" />
          <Img src={gallery.coverThumb} alt={gallery.name} />
        </ImgWrapper>
        <InfoBox>
          <p>작품명 | {gallery.name}</p>
          <p>작가 | {gallery.author}</p>
          <p>재료 | {gallery.material}</p>
        </InfoBox>
      </GalleryDetailWrapper>
    </GalleryWrapper>
  );
}

const GalleryWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #bf2420;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
`;

const GalleryDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bf2420;
  width: 40rem;
  height: 70rem;
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
  background-color: whitesmoke;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 99;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  ${({ theme }) => theme.fonts.text}
`;
