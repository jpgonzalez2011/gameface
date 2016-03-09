var React = require('react');

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
    PostApiUtil.deleteComment(commentId, mainTimeLine);
  },

  render: function () {
    var url = "#/users/" + this.props.comment.commenter_id;

    var commentDeleteButtonClass = null
    if (this.state.showDeleteButton) {
      commentDeleteButtonClass = "comment-delete-button";
    }

    return (
      <li key={this.props.key} className="photo-comment-item group">
        <h1 className="photo-comment-header">
          <a href={url}>
          <img className="photo-comment-thumbnail" src={this.props.comment.thumbnail}></img>
          </a>
          <span>
            <div><a href={url}>{this.props.comment.commenter_name}</a></div>
            {this.props.comment.content}
          </span>
        </h1>
        <s onClick={this.deleteComment} className={commentDeleteButtonClass}> </s>
        <span className="photo-comment-timestamp">
          {this.props.comment.date_and_time}
        </span>
      </li>
    );
  }
});

module.exports = PhotoCommentDisplay;
