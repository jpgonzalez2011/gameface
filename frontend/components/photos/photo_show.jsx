var React = require('react'),
    PhotoCommentDisplay = require('../comments/photo_comment_display'),
    PhotoCommentForm = require('../comments/photo_comment_form');

var PhotoShow = React.createClass({

  doNothing: function (e) {
    e.stopPropagation();
  },
  render: function () {
    if (this.props.show) {
      return (
        <div className="photo-show-container">
          <feature onClick={this.doNothing} className="photo-show-container-display group">
            <figure className="photo-show-container-display-close">
              Close Photo
            </figure>
            <figure className="photo-show-container-display-image-holder">
              <img className="photo-show-image" src={this.props.photo.full_url}/>
            </figure>
            <figure className="photo-show-container-information-pane">
              <header className="photo-show-container-information-pane-header">
                <h1>{this.props.photo.uploader_name}</h1>
                <h2>{this.props.photo.date_and_time}</h2>
              </header>
              <ul className="photo-show-container-information-pane-comments">
                {this.props.photo.comments.map ( function (comment, i) {
                  return (
                    <PhotoCommentDisplay key={i} comment={comment}/>
                    );
                  }
                )}
              </ul>
              <div className="photo-show-container-information-pane-comment-form">
                <PhotoCommentForm commentable_id={this.props.photo.id} />
              </div>
            </figure>
          </feature>
        </div>
      );
    } else {
      return (
        <div className="photo-noshow-container">
          <feature onClick={this.doNothing} className="photo-noshow-container-display group">
            <figure className="photo-noshow-container-display-close">
              Close Photo
            </figure>
            <figure className="photo-noshow-container-display-image-holder">
              <img className="photo-noshow-image" src={this.props.photo.full_url}/>
            </figure>
            <figure className="photo-noshow-container-information-pane">
              <header className="photo-noshow-container-information-pane-header">
                <h1>{this.props.photo.uploader_name}</h1>
                <h2>{this.props.photo.date_and_time}</h2>
              </header>
              <ul className="photo-noshow-container-information-pane-comments">
                {this.props.photo.comments.map ( function (comment, i) {
                  return (
                    <PhotoCommentDisplay key={i} comment={comment}/>
                    );
                  }
                )}
              </ul>
              <div className="photo-noshow-container-information-pane-comment-form">
                <PhotoCommentForm mainTimeLine={undefined} commentable_id={this.props.photo.id} />
              </div>
            </figure>
          </feature>
        </div>
      );
    }
  }
});

module.exports = PhotoShow;
