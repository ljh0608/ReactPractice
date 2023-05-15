import React from "react";
import { getGalleryInfo } from "../api/galleryInfo";
import Gallery from "./gallery";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { galleryState } from "../Recoil/gallery/atoms";
import { galleryParamSelector } from "../Recoil/gallery/selector";

export default function GalleryList() {
  //useRecoilState
  const [gallerys, setGallerys] = useRecoilState(galleryState);

  const handleSelect = (e) => {
    // handleSelect 함수를 작성해주세요
    e.preventDefault;
    setGallerys(galleryParamSelector(e.target.value));
  };
  return (
    <GalleryListWrapper>
      <BtnWrapper>
        <BtnSelect value="전체" onClick={handleSelect}>
          전체
        </BtnSelect>
        <BtnSelect value="이중섭" onClick={handleSelect}>
          이중섭 화가 작품
        </BtnSelect>
        <BtnSelect value="유채" onClick={handleSelect}>
          유화
        </BtnSelect>
      </BtnWrapper>
      <GalleryWrapper>
        {gallerys.map(({ no, author, material, name, coverThumb }) => (
          <Gallery key={no} no={no} author={author} material={material} name={name} coverThumb={coverThumb} />
        ))}
      </GalleryWrapper>
    </GalleryListWrapper>
  );
}

export const GalleryListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #bf2420;
  width: 100%;

  padding-bottom: 2rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  gap: 2rem;
  margin-top: 2rem;
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

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
