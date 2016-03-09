var React = require('react');

var CommentDisplay = React.createClass({
  getInitialState: function () {
    return {showDeleteButton: false}
  },

  showDeleteButton: function () {
    this.setState({showDeleteButton: true})
  },

  hideDeleteButton: function () {
    this.setState({showDeleteButton: false})
  },

  deleteComment: function () {
    commentId = this.props.comment.id
    CommentApiUtil.deleteComment(commentId);
  },

  render: function () {
    var url = "#/users/" + this.props.comment.commenter_id;
    var commentDeleteButtonClass = null
    if (this.state.showDeleteButton) {
      commentDeleteButtonClass = "comment-delete-button";
    }
    return (
      <li onMouseEnter={this.showDeleteButton} onMouseLeave={this.hideDeleteButton} key={this.props.key} className="comment-item group">
        <h1 className="comment-header">
          <a href={url}>
          <img className="comment-thumbnail" src={this.props.comment.thumbnail}></img>
          </a>
          <span>
            <div><a href={url}>{this.props.comment.commenter_name}</a></div>
            {this.props.comment.content}
          </span>
        </h1>
        <span onClick={this.deleteComment} className={commentDeleteButtonClass}> </span>
        <span className="comment-timestamp">
        {this.props.comment.date_and_time}
        </span>
      </li>
    );
  }
});

module.exports = CommentDisplay;
