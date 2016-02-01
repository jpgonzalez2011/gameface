var Dispatcher = require('../dispatcher/dispatcher'),
    PostConstants = require('../constants/post_constants');

var PostActions = {
  receivePosts: function (posts) {
    Dispatcher.dispatch({
      actionType: PostConstants.RECEIVED_POSTS,
      posts: posts
    });
  },

  receiveUpdatedPost: function (post) {
    Dispatcher.dispatch({
      actionType: PostConstants.RECEIVE_UPDATED_POST,
      post: post
    });
  },

  receiveUpdatedComment: function (comment) {
    Dispatcher.dispatch({
      actionType: PostConstants.RECEIVE_UPDATED_COMMENT,
      comment: comment
    });
  }
};

module.exports = PostActions;
