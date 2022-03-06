import axios from "axios";
const postComment = (videoId, requestBody) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/videos/${videoId}/comments?api_key=${process.env.REACT_APP_API_KEY}`,
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
        `${process.env.REACT_APP_API_URL}/videos/${videoId}/comments/${commentId}?api_key=${process.env.REACT_APP_API_KEY}`
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
      .get(
        `${process.env.REACT_APP_API_URL}/videos?api_key=${process.env.REACT_APP_API_KEY}`
      )
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
      .get(
        `${process.env.REACT_APP_API_URL}/videos/${videoId}?api_key=${process.env.REACT_APP_API_KEY}`
      )
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
