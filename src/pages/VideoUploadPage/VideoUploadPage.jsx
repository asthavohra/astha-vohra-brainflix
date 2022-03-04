import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import publishButton from "../../assets/icons/publish.svg";

function VideoUploadPage(props) {
  // Prevents the form from reloading the page when submitted

  function pushBack(event) {
    event.preventDefault();
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("I have no error, I will be resolve");
      }, 3000);
    });
    //Used toastify to show pending and error toast after clicking on Publish
    toast
      .promise(resolveAfter3Sec, {
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
            <img
              className="form__btn__div__cta__icon"
              src={publishButton}
              alt="Publish Icon"
            />
            Publish
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
