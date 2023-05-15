import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPage from "./@pages/galleryPage";
import DetailPage from "./@pages/detailPage";
import Home from "./@pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/art" element={<GalleryPage />} />
        <Route path="/:detailId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
