import "./Avatar.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function AvatarMobile() {
  return (
    <div className="avatar-container-mobile">
      <img src={avatar} className="avatar" alt="Avatar" />
    </div>
  );
}

export default AvatarMobile;
