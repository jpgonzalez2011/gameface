var React = require('react'),
    TimeAgo = require('react-timeago'),
    CurrentUserStore = require('../../stores/current_user_store'),
    PhotoApiUtil = require('../../util/photo_api_util');

var PhotoCommentDisplay = React.createClass({
  getInitialState: function () {
    return {showDeleteButton: false}
  },

  showDeleteButton: function () {
    if (this.props.comment.commenter_id == CurrentUserStore.currentUser().id) {
      this.setState({showDeleteButton: true})
    }
  },

  hideDeleteButton: function () {
    this.setState({showDeleteButton: false})
  },

  deleteComment: function () {
    commentId = this.props.comment.id
    mainTimeLine = this.props.mainTimeLine;
    PhotoApiUtil.deleteComment(commentId, mainTimeLine);
  },

  render: function () {
    var url = "#/users/" + this.props.comment.commenter_id;

    var commentDeleteButtonClass = null
    if (this.state.showDeleteButton) {
      commentDeleteButtonClass = "comment-delete-button";
    }

    return (
      <li onMouseEnter={this.showDeleteButton} onMouseLeave={this.hideDeleteButton} key={this.props.key} className="photo-comment-item group">
        <h1 className="photo-comment-header">
          <a href={url}>
          <img className="photo-comment-thumbnail" src={this.props.comment.thumbnail}></img>
          </a>
          <span>
            <div><a href={url}>{this.props.comment.commenter_name}</a></div>
            {this.props.comment.content}
          </span>
        </h1>
        <strong onClick={this.deleteComment} className={commentDeleteButtonClass}> </strong>
        <span className="photo-comment-timestamp">
          <TimeAgo date={this.props.comment.date_and_time} />
        </span>
      </li>
    );
  }
});

module.exports = PhotoCommentDisplay;
