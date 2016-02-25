var React = require('react'),
    PhotoCommentForm = require('../comments/photo_comment_form'),
    CommentDisplay = require('../comments/comment_display'),
    PhotoShow = require('../photos/photo_show');

var TimelinePhotoItem = React.createClass({
  getInitialState: function () {
    return { show: false };
  },

  toggleShow: function () {
    this.setState({ show: !this.state.show});
  },

  render: function () {
    return (
      <li key={this.props.i} className="timeline-index-item">
        <h1 className="timeline-index-item-header">
          <div>{this.props.header}</div>
          <span>{this.props.item.date_and_time}</span>
        </h1>
        <div onClick={this.toggleShow} className="timeline-photo-preview-container">
          <img className="timeline-photo-preview" src={this.props.item.medium_url} />
          <div className="like-comment-bar"> <div className="like-button">Like</div></div>
          <PhotoShow mainTimeLine={true} photo={this.props.item} show={this.state.show} />
        </div>
        <ul className="timeline-index-item-comments-list">
          {this.props.item.comments.map( function (comment, i) {
            return (
              <CommentDisplay key={i} comment={comment} />
            );
          })}
        </ul>
        <div className="timeline-index-item-comment-form">
          <PhotoCommentForm key={this.props.i} mainTimeLine={this.props.mainTimeLine} commentable_id={this.props.item.id} />
        </div>
      </li>
    );
  }
});

module.exports = TimelinePhotoItem;
