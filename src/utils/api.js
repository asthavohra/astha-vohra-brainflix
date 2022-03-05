import axios from "axios";
export const API_URL = "https://project-2-api.herokuapp.com";
export const API_KEY = "06c11c2f-28c0-423f-bf35-1cd14cdafdee";
const postComment = (videoId, requestBody) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${API_URL}/videos/${videoId}/comments?api_key=${API_KEY}`,
        requestBody
      )
      .then((response) => {
        if (validateResponse(response)) {
          resolve(response.data);
        } else {
          reject("Unable to get a valid response");
        }
      })
      .catch((error) => {
        reject("Cannot post the comment due to ", error);
      });
  });
};

const validateResponse = (response) => {
  if (
    response &&
    response.status === 200 &&
    response.data &&
    response.data.timestamp
  ) {
    return true;
  }
  return false;
};
export default postComment;
