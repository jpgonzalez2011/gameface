var React = require('react');

var CommentDisplay = React.createClass({
  render: function () {
    var url = "#/users/" + this.props.comment.commenter_id;
    return (
      <li key={this.props.key} className="comment-item group">
        <h1 className="comment-header">
          <a href={url}>
          <img className="comment-thumbnail" src={this.props.comment.thumbnail}></img>
          </a>
          <span>
            <div><a href={url}>{this.props.comment.commenter_name}</a></div>
            {this.props.comment.content}
          </span>
        </h1>
        <span className="comment-timestamp">
        {this.props.comment.date_and_time}
        </span>
      </li>
    );
  }
});

module.exports = CommentDisplay;
