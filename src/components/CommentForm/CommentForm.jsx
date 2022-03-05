import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import AvatarMobile from "../Avatar/AvatarMobile";
import commentButton from "../../assets/icons/add_comment.svg";
import { postComment } from "../../utils/api";
import { Component } from "react";

class CommentForm extends Component {
  state = {
    name: "Astha Vohra",
    comment: "",
    hasError: false,
  };

  initialState = this.state;
  //this function removes the error class on the comment text field once the user starts typing
  checkEmptyComment = (event) => {
    if (event.target.value && this.state.hasError)
      this.setState({ hasError: false });
  };

  handleChangeForComment = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  //this function checks if the comment text filed is empty or not
  isFormValid = () => {
    return this.state.comment;
  };

  addComment = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      postComment(this.props.selectedEntry.id, {
        name: this.state.name,
        comment: this.state.comment,
      })
        .then((response) => {
          this.props.getVideoDetails(this.props.selectedEntry.id);
          //clears the value in comment field after posting
          this.setState(this.initialState);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      this.setState({ hasError: true });
    }
  };

  render() {
    return (
      <form id="comment-form" className="form" onSubmit={this.addComment}>
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
              onChange={this.handleChangeForComment}
              value={this.state.comment}
              id="comment"
              name="comment"
              className={`form__textarea ${
                this.state.hasError ? "form__textarea-error" : ""
              } `}
              placeholder="Add a new comment"
              onKeyPress={this.checkEmptyComment}
            ></input>
          </div>
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
}
export default CommentForm;
