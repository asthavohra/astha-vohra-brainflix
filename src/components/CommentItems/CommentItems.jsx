import "./CommentItems.scss";
import moment from "moment";
import deleteIcon from "../../assets/icons/icon-delete.svg";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";
import { Component } from "react";
import Avatar from "../Avatar/AvatarMobile";

class CommentItems extends Component {
  handleClick = (commentId) => {
    axios
      .delete(
        `${API_URL}/videos/${this.props.selectedEntry.id}/comments/${commentId}?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response);
        this.props.getVideoDetails(this.props.selectedEntry.id);
      })
      .catch((error) => {
        alert("Cannot delete the comment due to  ", error);
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
