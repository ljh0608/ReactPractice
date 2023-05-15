import axios from "axios";

export const useGallery = async () => {
  try {
    const response = await axios.get(`https://67f09d03-afd1-405f-bac1-4b16e02d1726.mock.pstmn.io/list`);
    // throw new Error();
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
