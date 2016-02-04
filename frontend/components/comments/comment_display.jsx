var React = require('react');

var CommentDisplay = React.createClass({
  render: function () {
    var url = "#/users/" + this.props.comment.commenter_id;
    return (
      <li key={this.props.key} className="comment-item group">
        <a href={url}>
          <img className="comment-thumbnail" src={this.props.comment.thumbnail}></img>
        </a>
        <h1 className="comment-header">
          <div>{this.props.comment.commenter_name}</div>
          <p className="comment-content">
            {this.props.comment.content}
          </p>
        </h1>
        <span className="comment-timestamp">{
            this.props.comment.date_and_time}
        </span>
      </li>
    );
  }
});

module.exports = CommentDisplay;
