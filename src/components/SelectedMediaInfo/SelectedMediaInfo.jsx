import "./SelectedMediaInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import Comments from "../Comments/Comments";
import moment from "moment";

function SelectedMediaInfo({ selectedEntry, getVideoDetails }) {
  return (
    <article className="selected-media">
      <section className="selected-media__info">
        <div className="selected-media__info__div">
          <h1 className="selected-media__info__div__title">
            {selectedEntry.title}
          </h1>
        </div>

        <div className="selected-media__subtitles">
          <div className="selected-media__top">
            <h2 className="selected-media__channel">
              By {selectedEntry.channel}
            </h2>
            <p className="selected-media__timestamp">
              {moment(selectedEntry.timestamp).fromNow()}
            </p>
          </div>
          <div className="selected-media__bottom">
            <div className="selected-media__stats">
              <img
                className="selected-media__icon"
                src={viewsIcon}
                alt="Views Icon"
              />
              <p className="selected-media__number">{selectedEntry.views}</p>
            </div>
            <div className="selected-media__stats">
              <img
                className="selected-media__icon"
                src={likesIcon}
                alt="Likes Icon"
              />
              <p className="selected-media__number">{selectedEntry.likes}</p>
            </div>
          </div>
        </div>
        <div className="selected-media__description__div">
          <p className="selected-media__description__div__text">
            {selectedEntry.description}
          </p>
        </div>
      </section>
      <section className="selected-media__comments">
        <Comments
          selectedEntry={selectedEntry}
          getVideoDetails={getVideoDetails}
        />
      </section>
    </article>
  );
}

export default SelectedMediaInfo;
