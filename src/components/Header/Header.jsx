import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import UploadBtn from "../UploadBtn/UploadBtn";
import Avatar from "../Avatar/Avatar";
function Header() {
  return (
    <header className="header">
      <section className="header__logo">
        <a href="/">
          <div className="header__logo-div">
            <img className="header__logo-img" src={logo} alt="BrainFlix Logo" />
          </div>
        </a>
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
