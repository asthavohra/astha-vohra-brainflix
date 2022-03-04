import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import AvatarMobile from "../Avatar/AvatarMobile";
import commentButton from "../../assets/icons/add_comment.svg";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";
import { Component } from "react";

class CommentForm extends Component {
  state = {
    name: "Astha Vohra",
    comment: "",
    hasError: false,
  };

  initialState = this.state;
  checkEmptyComment = (event) => {
    if (event.target.value && this.state.hasError)
      this.setState({ hasError: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFormValid = () => {
    if (!this.state.name || !this.state.comment) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      axios
        .post(
          `${API_URL}/videos/${this.props.selectedEntry.id}/comments?api_key=${API_KEY}`,
          {
            name: this.state.name,
            comment: this.state.comment,
          }
        )
        .then((response) => {
          this.props.getVideoDetails(this.props.selectedEntry.id);
          this.setState(this.initialState);
        })
        .catch((error) => {
          alert("Oops! Something happened: ", error);
        });
    } else {
      this.setState({ hasError: true });
    }
  };
  render() {
    return (
      <form id="comment-form" className="form" onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange}
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
