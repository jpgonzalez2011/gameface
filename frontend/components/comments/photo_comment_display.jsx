var React = require('react');

var PhotoCommentDisplay = React.createClass({
  render: function () {
    var url = "#/users/" + this.props.comment.commenter_id;
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
        <span className="photo-comment-timestamp">
          {this.props.comment.date_and_time}
        </span>
      </li>
    );
  }
});

module.exports = PhotoCommentDisplay;
