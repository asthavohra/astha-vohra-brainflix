import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Component } from "react";

function VideoUploadPage(props) {
  // Prevents the form from reloading the page when submitted

  function pushBack(event) {
    event.preventDefault();
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      //you will do api call to upload video
      //on success you will resolve
      //on error you will reject
      setTimeout(() => {
        if (2 % 2 == 1) {
          resolve("I have no error, I will be resolve");
        } else {
          reject("I have some error, I will be rejected!!!!!");
        }
      }, 3000);
    });
    toast
      .promise(resolveAfter3Sec, {
        pending: "Video Upload in progess ",
        success: "Promise resolved 👌",
        error: "Cannot Upload the Video,Please try again later 🤯",
      })
      .finally(() => {
        props.history.push("/");
      });
  }

  return (
    <article className="upload-video">
      <ToastContainer />
      <h1 className="upload-video__title">Upload Video</h1>
      <form className="upload-form" onSubmit={pushBack}>
        <div className="upload-form__container">
          <div className="upload-form__thumbnail">
            <label htmlFor="videoThumbnail" className="upload-form__label">
              Video thumbnail
            </label>
            {/* img and div to be replaced by a file input tag */}
            <div className="upload-form__input-img-container">
              <img
                src={thumbnail}
                className="upload-form__input-img"
                alt="Video Upload Thumbnail"
              />
            </div>
          </div>
          <div className="upload-form__info">
            <label htmlFor="videoTitle" className="upload-form__label">
              Title your video
            </label>
            <input
              type="text"
              id="video-title"
              name="videoTitle"
              className="upload-form__input-txt"
              placeholder="Add a title to your video"
            />

            <label htmlFor="videoDescription" className="upload-form__label">
              Add a video description
            </label>
            <textarea
              id="video-description"
              name="videoDescription"
              className="upload-form__textarea"
              placeholder="Add a description of your video"
            ></textarea>
          </div>
        </div>
        <div className="upload-form__links">
          <button
            id="upload-btn"
            className="upload-form__publish-btn"
            type="submit"
          >
            Publish
          </button>
          <button className="btns__cancel" onClick={(e) => e.preventDefault()}>
            CANCEL
          </button>
        </div>
      </form>
    </article>
  );
}

export default VideoUploadPage;
