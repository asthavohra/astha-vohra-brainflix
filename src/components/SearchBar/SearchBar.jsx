import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search.svg";

import avatar from "../../assets/images/Mohan-muruge.jpg";

function SearchBar() {
  return (
    <>
      <div className="searchbar">
        <div className="searchbar__div">
          <form className="searchbar__div__form">
            <label>
              <img
                src={searchIcon}
                alt="Search Icon"
                className="searchbar__div__form__icon"
              />
            </label>

            <input
              type="text"
              placeholder="Search"
              className="searchbar__div__form__input"
            />
          </form>
        </div>
        <div className="searchbar__div__avatar">
          <img src={avatar} className="avatar" alt="Avatar" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
