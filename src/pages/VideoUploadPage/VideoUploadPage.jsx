import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import publishButton from "../../assets/icons/publish.svg";
import { postVideo } from "../../utils/api";
import { Component } from "react";

class VideoUploadPage extends Component {
  state = {
    title: "",
    description: "",
    videoUploadTitleValidation: false,
    videoUploadDescriptionValidation: false,
  };
  handleVideoUploadFormChange = (event) => {
    if (event.target.name === "videoTitle") {
      if (event.target.value === "") {
        this.setState({
          title: event.target.value,
          videoUploadTitleValidation: true,
        });
      } else {
        this.setState({
          title: event.target.value,
          videoUploadTitleValidation: false,
        });
      }
    } else if (event.target.name === "videoDescription") {
      if (event.target.value === "") {
        this.setState({
          description: event.target.value,
          videoUploadDescriptionValidation: true,
        });
      } else {
        this.setState({
          description: event.target.value,
          videoUploadDescriptionValidation: false,
        });
      }
    }
  };
  //sets error class and calls uploadVideo function only if both conditions are true
  validateVideoUploadForm = () => {
    if (this.state.title === "" || this.state.description === "") {
      let isVideoTitleEmpty = this.state.title === "";
      let isVideoDescriptionEmpty = this.state.description === "";
      this.setState({
        videoUploadTitleValidation: isVideoTitleEmpty,
        videoUploadDescriptionValidation: isVideoDescriptionEmpty,
      });
      return false;
    }

    return true;
  };
  uploadVideo = (event) => {
    // Prevents the form from reloading the page when submitted
    event.preventDefault();
    if (!this.validateVideoUploadForm()) {
      return;
    }
    let uploadedVideoId;
    const postVideoPromise = new Promise((resolve, reject) => {
      postVideo({
        title: this.state.title,
        description: this.state.description,
      })
        .then((response) => {
          uploadedVideoId = response.id;
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });

    //Used toastify to show pending and error toast after clicking on Publish

    toast
      .promise(postVideoPromise, {
        pending: "Video upload in progress",
        success: "Video Upload in Progress.You will be redirected to home page",
        error:
          "Cannot Upload the Video at moment!You will be redirected to home page soon ",
        autoClose: 5000,
      })
      .finally(() => {
        setTimeout(() => {
          //Takes back to home page
          this.props.history.push(`/videos/${uploadedVideoId}`);
        }, 5000);
      });
  };
  render() {
    return (
      <article className="upload-video">
        <ToastContainer />
        <h1 className="upload-video__title">Upload Video</h1>
        <form className="upload-form" onSubmit={this.uploadVideo}>
          <div className="upload-form__container">
            <div className="upload-form__thumbnail">
              <label htmlFor="videoThumbnail" className="upload-form__label">
                Video thumbnail
              </label>

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
                className={`upload-form__input-txt ${
                  this.state.videoUploadTitleValidation
                    ? "upload-form__input-txt-error"
                    : ""
                }`}
                placeholder="Add a title to your video"
                onChange={this.handleVideoUploadFormChange}
              />

              <label htmlFor="videoDescription" className="upload-form__label">
                Add a video description
              </label>
              <textarea
                id="video-description"
                name="videoDescription"
                className={`upload-form__textarea ${
                  this.state.videoUploadDescriptionValidation
                    ? "upload-form__textarea-error"
                    : ""
                }`}
                placeholder="Add a description of your video"
                onChange={this.handleVideoUploadFormChange}
              ></textarea>
            </div>
          </div>
          <div className="upload-form__links">
            <button
              id="upload-btn"
              className="upload-form__publish-btn"
              type="submit"
            >
              <img
                className="form__btn__div__cta__icon"
                src={publishButton}
                alt="Publish Icon"
              />
              <div className="form__btn__div__cta__icon__text">Publish</div>
            </button>
            {/* Linked the Cancel Button to Home Page*/}
            <Link to="/" className="upload-form__cancel-link">
              CANCEL
            </Link>
          </div>
        </form>
      </article>
    );
  }
}

export default VideoUploadPage;
