import { useGallery } from "./useGallery";
import { atom, selector } from "recoil";

export const galleryState = atom({
  key: "galleryState",
  default: selector({
    key: "usersAtom/default",
    get: () => {
      const gallery = useGallery();
      return gallery;
    },
  }),
});
