import "./CommentItems.scss";
import moment from "moment";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import { deleteComment } from "../../utils/api";
import { Component } from "react";

class CommentItems extends Component {
  handleClick = (commentId) => {
    deleteComment(this.props.selectedEntry.id, commentId)
      .then((response) => {
        this.props.getVideoDetails(this.props.selectedEntry.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    const { comments } = this.props.selectedEntry;
    return (
      <>
        {comments
          .sort((a, b) => {
            return b.timestamp - a.timestamp;
          })
          .map((comment) => {
            return (
              <article className="comment" key={comment.id}>
                <div className="comment__left">
                  <div className="avatar-mobile"></div>

                  <div className="avatar-container"></div>
                </div>
                <div className="comment__right">
                  <div className="comment__right__main">
                    <div className="comment__right__main__name">
                      <h3 className="comment__right__main__name__text">
                        {comment.name}
                      </h3>
                    </div>
                    <div className="comment__right__main__timestamp">
                      <p className="comment__right__main__timestamp__text">
                        {moment(comment.timestamp).fromNow()}
                      </p>
                    </div>
                  </div>
                  <div className="comment__text">
                    <p>{comment.comment}</p>
                  </div>
                  <div className="comment__right-buttons">
                    <img
                      onClick={() => this.handleClick(comment.id)}
                      className="comment__like-btn"
                      src={deleteIcon}
                      alt="Delete Icon"
                    />
                  </div>
                </div>
              </article>
            );
          })}
      </>
    );
  }
}
export default CommentItems;
