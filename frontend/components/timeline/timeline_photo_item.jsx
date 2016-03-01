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
    var imageBackground = {
      backgroundImage: 'url(' + this.props.item.medium_url + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
     };
    return (
      <li key={this.props.i} className="timeline-index-item">
        <h1 className="timeline-index-item-header">
          <div>{this.props.header}</div>
          <span>{this.props.item.date_and_time}</span>
        </h1>
        <div onClick={this.toggleShow} className="timeline-photo-preview-container" style={imageBackground}>
          <PhotoShow mainTimeLine={true} photo={this.props.item} show={this.state.show} />
        </div>
        <div className="timeline-index-item-comments-container">
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
        </div>
      </li>
    );
  }
});

module.exports = TimelinePhotoItem;
