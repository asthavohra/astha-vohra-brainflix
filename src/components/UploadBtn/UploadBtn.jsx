import "./UploadBtn.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import Avatar from "../Avatar/Avatar";

function UploadBtn() {
  return (
    <button className="upload-btn" type="submit">
      <img className="upload-btn__icon" src={uploadIcon} alt="Upload Icon" />
      Upload
    </button>
  );
}

export default UploadBtn;
