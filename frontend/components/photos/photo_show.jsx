var React = require('react'),
    PhotoCommentDisplay = require('../comments/photo_comment_display'),
    PhotoCommentForm = require('../comments/photo_comment_form');

var PhotoShow = React.createClass({

  doNothing: function (e) {
    e.stopPropagation();
  },
  render: function () {
    var url = "#/users/" + this.props.photo.uploader_id;
    if (this.props.show) {
      return (
        <div className="photo-show-container">
          <feature onClick={this.doNothing} className="photo-show-container-display group">
            <figure className="photo-show-container-display-close">
            </figure>
            <figure className="photo-show-container-display-image-holder">
              <img className="photo-show-image" src={this.props.photo.full_url}/>
            </figure>
            <figure className="photo-show-container-information-pane">
              <header className="photo-show-container-information-pane-header">
                <h1><a href={url}>{this.props.photo.uploader_name}</a></h1>
                <h2>{this.props.photo.date_and_time}</h2>
                <div className="like-comment-bar"> <div className="like-button">Like</div></div>
              </header>
              <div className="photo-comment-container">
                <ul className="photo-show-container-information-pane-comments">
                  {this.props.photo.comments.map ( function (comment, i) {
                    return (
                      <PhotoCommentDisplay key={i} comment={comment}/>
                      );
                    }
                  )}
                </ul>
                <div className="photo-show-container-information-pane-comment-form">
                  <PhotoCommentForm mainTimeLine={this.props.mainTimeLine} commentable_id={this.props.photo.id} />
                </div>
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
                <div className="like-comment-bar"> <div className="like-button">Like</div></div>
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
                <PhotoCommentForm mainTimeLine={this.props.mainTimeLine} commentable_id={this.props.photo.id} />
              </div>
            </figure>
          </feature>
        </div>
      );
    }
  }
});

module.exports = PhotoShow;
