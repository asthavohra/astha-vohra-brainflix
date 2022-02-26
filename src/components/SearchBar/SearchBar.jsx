import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search.svg";
import AvatarMobile from "../Avatar/AvatarMobile";
function SearchBar() {
  return (
    <>
      <form className="searchbar">
        <label>
          <img src={searchIcon} alt="Search Icon" className="searchbar__icon" />
        </label>

        <input type="text" placeholder="Search" className="searchbar__input" />
      </form>
      <AvatarMobile />
    </>
  );
}

export default SearchBar;
