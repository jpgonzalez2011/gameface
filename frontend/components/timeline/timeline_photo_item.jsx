var React = require('react'),
    PhotoCommentForm = require('../comments/photo_comment_form'),
    CommentDisplay = require('../comments/comment_display');

var TimelinePhotoItem = React.createClass({
  render: function () {
    return (
      <li key={this.props.i} className="timeline-index-item">
        <h1 className="timeline-index-item-header">
          <div>{this.props.header}</div>
          <span>{this.props.item.date_and_time}</span>
        </h1>
        <img className="timeline-photo-preview" src={this.props.item.medium_url} />
        <ul className="timeline-index-item-comments-list">
          {this.props.item.comments.map( function (comment, i) {
            return (
              <CommentDisplay key={i} comment={comment} />
            );
          })}
        </ul>
        <div className="timeline-index-item-comment-form">
          <PhotoCommentForm mainTimeLine={this.props.mainTimeLine} commentable_id={this.props.item.id} />
        </div>
      </li>
    );
  }
});

module.exports = TimelinePhotoItem;
