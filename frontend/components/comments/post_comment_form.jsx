var React = require('react'),
    PostStore = require('../../stores/post_store'),
    CurrentUserStore = require('../../stores/current_user_store');

var PostCommentForm = React.createClass({
  getInitialState: function () {
    return ({
      content: "",
      showFooter: false
    });
  },

  handleKeydown: function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      var comment = { comment: {
        commenter_id: CurrentUserStore.currentUser().id,
        commentable_id: this.props.commentable_id,
        commentable_type: "Post",
        content: this.state.content,
        mainTimeLine: this.props.mainTimeLine
      }};
      PostStore.addNewComment(comment);
      this.setState({content: ""});
      $(".comment-form-input").val("");
    } else {
      this.handleChange(e);
    }
  },

  handleChange: function (e) {
    this.setState( { content: e.target.value } );
  },


  render: function () {
    return (
      <div className="comment-form-container group">
        <img className="comment-form-thumbnail" src={CurrentUserStore.currentUser().profile_thumb_url}></img>
        <form className="comment-form">
          <textarea className="comment-form-input" type="text" id="comment-form-input-id" placeholder="Write a comment..." onKeyUp={this.handleKeydown}>
          </textarea>
        </form>
      </div>
    );
  }
});

module.exports = PostCommentForm;
