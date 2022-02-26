import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import AvatarMobile from "../Avatar/AvatarMobile";
import commentButton from "../../assets/icons/add_comment.svg";

function CommentForm({ handleSubmit }) {
  return (
    <form id="comment-form" className="form" onSubmit={handleSubmit}>
      <div className="form__personal-info">
        <div className="form__avatar">
          <Avatar />
          <AvatarMobile />
        </div>
      </div>
      <div className="form__container">
        <div className="form__comment">
          <label htmlFor="comment" className="form__label">
            Join the conversation
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            className="form__textarea"
            placeholder="Add a new comment"
          ></input>
        </div>
        {/*
        <button id="comment-btn" className="form__btn">
          <img
            src={commentButton}
            className="form__btn"
            id="comment-btn"
            alt="Comment-Button"
          />
          Comment
        </button>
  */}
        <div className="form__btn__div">
          <button className="form__btn__div__cta" type="submit">
            <img
              className="form__btn__div__cta__icon"
              src={commentButton}
              alt="Upload Icon"
            />
            <div className="form__btn__div__cta__icon__text">COMMENT</div>
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
