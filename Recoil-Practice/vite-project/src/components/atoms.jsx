import { atom, selector } from "recoil";

import { fetchUsers } from "../apis/fetchUsers";

export const usersAtom = atom({
  key: "usersAtom",
  default: selector({
    key: "usersAtom/default",
    get: async () => {
      const users = await fetchUsers();
      return users;
      // throw new Error();
    },
  }),
});
