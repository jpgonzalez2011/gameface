var React = require('react');

var PhotoCommentDisplay = React.createClass({
  render: function () {
    var url = "#/users/" + this.props.comment.commenter_id;
    return (
      <li key={this.props.key} className="photo-comment-item group">
        <a href={url}>
          <img className="photo-comment-thumbnail" src={this.props.comment.thumbnail}></img>
        </a>
        <h1 className="photo-comment-header">
          <div>{this.props.comment.commenter_name}</div>
          <p className="photo-comment-content">
            {this.props.comment.content}
          </p>
        </h1>
        <span className="photo-comment-timestamp">{
            this.props.comment.date_and_time}
        </span>
      </li>
    );
  }
});

module.exports = PhotoCommentDisplay;
