import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import UploadBtn from "../UploadBtn/UploadBtn";
import Avatar from "../Avatar/Avatar";
import CommentForm from "../CommentForm/CommentForm";
import MediaList from "../MediaList/MediaList";
import videos from "../../data/videos.json";
function Header() {
  return (
    <header className="header">
      <section className="header__logo" href="">
        {/*videos.map((video) => (
          <div>{video.id}</div>
        ))*/}

        <img className="header__logo-img" src={logo} alt="BrainFlix Logo" />
      </section>
      <section className="header__content">
        <SearchBar />
        <UploadBtn />
        <Avatar />
      </section>
    </header>
  );
}

export default Header;
