import { selectorFamily, selector } from "recoil";
import { useGallery } from "./useGallery";

export const galleryParamSelector = selectorFamily({
  key: "galleryParamSelector",
  get: (param) => async () => {
    const gallery = await useGallery();

    switch (param) {
      case "전체":
        return gallery;
      case "이중섭":
        return gallery.filter((item) => item.author === param);
      case "유채":
        return gallery.filter((item) => item.material.includes(param));
      default:
        return gallery;
    }
  },
});

export const gallerySelector = selectorFamily({
  key: "gallerySelector",
  get: (param) => async () => {
    const gallery = await useGallery();
    const newArt = gallery.filter((item) => item.no === parseInt(param));
    return newArt.length > 0 ? newArt[0] : null;
  },
});
