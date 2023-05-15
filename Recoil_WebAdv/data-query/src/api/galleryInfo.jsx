import axios from "axios";

export async function getGalleryInfo() {
  try {
    const data = await axios.get(`https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list`);

    return data.data;
  } catch (e) {
    console.log(e);
  }
}
