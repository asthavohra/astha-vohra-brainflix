import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import UploadBtn from "../UploadBtn/UploadBtn";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <section className="header__logo">
        <div className="header__logo-div">
          <Link to="/" className="header__logo-link">
            <img className="header__logo-img" src={logo} alt="BrainFlix Logo" />
          </Link>
        </div>
      </section>
      <section className="header__content">
        <SearchBar />
        <Link to="/videoupload" className="header__upload-link">
          <UploadBtn />
        </Link>
        <Avatar />
      </section>
    </header>
  );
}

export default Header;
