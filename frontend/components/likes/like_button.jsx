var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    LikesApiUtil = require('../../util/likes_api_util');

var LikeButton = React.createClass({
  like: function (e) {
    e.preventDefault();
    LikesApiUtil.addLike(
      this.props.likeableId,
      this.props.likeableType,
      CurrentUserStore.currentUser().id
    );
  },

  unlike: function(e) {
    e.preventDefault();
    LikesApiUtil.removeLike(
      this.props.likeableId,
      this.props.likeableType,
      CurrentUserStore.currentUser().id
    );
  },

  render: function () {
    if (this.props.likedByCurrentUser) {
      return (
        <div className="like-comment-bar">
          <div onClick={this.unlike} className="like-button-blue">
            {this.props.likes}
          </div>
        </div>
      );
    } else {
      return (
        <div className="like-comment-bar">
          <div onClick={this.like} className="like-button-gray">
            {this.props.likes}
          </div>
        </div>
      )
    }
  }
});

module.exports = LikeButton;
