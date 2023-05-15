import React, { Suspense, useEffect, useState } from "react";
import MainHeader from "../@components/mainHeader";
import GalleryList from "../@components/galleryList";
import { ErrorBoundary } from "react-error-boundary";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
//환경변수 추가
export default function galleryPage() {
  return (
    <>
      <MainHeader />
      {/* 에러바운더리와 suspense를 적용해주세요 */}
      <ErrorBoundary fallback={<ErrorPage></ErrorPage>}>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          <GalleryList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
