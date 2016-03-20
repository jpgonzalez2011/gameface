var React = require('react'),
    TimeAgo = require('react-timeago'),
    PostCommentForm = require('../comments/post_comment_form'),
    CommentDisplay = require('../comments/comment_display');

var TimelinePostItem = React.createClass({
  render: function () {
    return (
      <li key={this.props.i} className="timeline-index-item">
        <h1 className="timeline-index-item-header">
          <div>{this.props.header}</div>
          <TimeAgo date={this.props.item.date_and_time} />
        </h1>
        <div className="timeline-index-item-content">{this.props.item.content}</div>
        <div className="timeline-index-item-comments-container">
          <ul className="timeline-index-item-comments-list">
            {this.props.item.comments.map( function (comment, i) {
              return (
                <CommentDisplay mainTimeLine={true} key={i} comment={comment} />
              );
            })}
          </ul>
          <div className="timeline-index-item-comment-form">
            <PostCommentForm key={this.props.i} mainTimeLine={this.props.mainTimeLine} commentable_id={this.props.item.id} />
          </div>
        </div>
      </li>
    );
  }
});

module.exports = TimelinePostItem;
