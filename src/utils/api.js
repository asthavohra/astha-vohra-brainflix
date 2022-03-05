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
        if (validateAddCommentResponse(response)) {
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

const validateAddCommentResponse = (response) => {
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
const deleteComment = (videoId, commentId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `${API_URL}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`
      )
      .then((response) => {
        if (validateDeleteCommentResponse(response)) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject("Cannot delete the comment due to  ", error);
      });
  });
};
const validateDeleteCommentResponse = (response) => {
  if (response && response.data && response.status === 200) {
    return true;
  } else return false;
};
const getVideos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        if (validateVideoResponse(response)) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject("The error is ", error);
      });
  });
};
const validateVideoResponse = (response) => {
  if (
    response &&
    response.data &&
    response.status === 200 &&
    response.data.length > 0
  ) {
    return true;
  } else return false;
};

const getVideoDetails = (videoId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {
        if (validateVideoDetailsResponse(response)) {
          resolve(response);
        }
      })
      .catch((error) => {
        reject("The error is ", error);
      });
  });
};
const validateVideoDetailsResponse = (response) => {
  if (response && response.data && response.status === 200) {
    return true;
  } else return false;
};
export { postComment, deleteComment, getVideos, getVideoDetails };
