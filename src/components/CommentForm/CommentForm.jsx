import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import commentButton from "../../assets/icons/add_comment.svg";

function CommentForm({ handleSubmit }) {
  return (
    <form id="comment-form" className="form" onSubmit={handleSubmit}>
      <div className="form__personal-info">
        <div className="form__avatar">
          <Avatar />
        </div>
      </div>
      <div className="form__container">
        <div className="form__comment">
          <label htmlFor="comment" className="form__label">
            Join the conversation
          </label>
          <textarea
            id="comment"
            name="comment"
            className="form__textarea"
            placeholder="Write comment here"
          ></textarea>
        </div>
        <button id="comment-btn" className="form__btn">
          <img
            src={commentButton}
            className="form__btn"
            id="comment-btn"
            alt="Comment-Button"
          />
          Comment
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
