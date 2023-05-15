import React, { Suspense } from "react";
import MainHeader from "../@components/mainHeader";
import GalleryDetail from "../@components/galleryDetail";
import { ErrorBoundary } from "react-error-boundary";

import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
export default function detailPage() {
  return (
    <>
      <MainHeader />
      <ErrorBoundary fallback={<ErrorPage></ErrorPage>}>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          <GalleryDetail />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
