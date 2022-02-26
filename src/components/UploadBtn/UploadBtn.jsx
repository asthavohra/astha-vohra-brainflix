import "./UploadBtn.scss";
import uploadIcon from "../../assets/icons/upload.svg";

function UploadBtn() {
  return (
    <div className="upload">
      <button className="upload-btn" type="submit">
        <img className="upload-btn__icon" src={uploadIcon} alt="Upload Icon" />
        <div className="upload-btn__icon__text">upload</div>
      </button>
    </div>
  );
}

export default UploadBtn;
