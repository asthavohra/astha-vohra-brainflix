import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import publishButton from "../../assets/icons/publish.svg";
import { postVideo } from "../../utils/api";

function VideoUploadPage(props) {
  let requestData = {
    title: "",
    description: "",
  };
  function handleVideoTitleChange(event) {
    requestData.title = event.target.value;
  }
  function handleVideoDescriptionChange(event) {
    requestData.description = event.target.value;
  }
  function pushBack(event) {
    console.log(requestData);
    const postVideoPromise = new Promise((resolve, reject) => {
      postVideo(requestData)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });

    // Prevents the form from reloading the page when submitted
    event.preventDefault();
    //Used toastify to show pending and error toast after clicking on Publish
    toast
      .promise(postVideoPromise, {
        pending: "Video upload in progress",
        success: "Promise resolved ",
        error:
          "Cannot Upload the Video at moment!You will be redirected to home page soon ",
        autoClose: 5000,
      })
      .finally(() => {
        setTimeout(() => {
          //Takes back to home page
          props.history.push("/");
        }, 5000);
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
              onChange={handleVideoTitleChange}
            />

            <label htmlFor="videoDescription" className="upload-form__label">
              Add a video description
            </label>
            <textarea
              id="video-description"
              name="videoDescription"
              className="upload-form__textarea"
              placeholder="Add a description of your video"
              onChange={handleVideoDescriptionChange}
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

export default VideoUploadPage;
