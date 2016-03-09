var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    PostConstants = require('../constants/post_constants'),
    PostApiUtil = require('../util/post_api_util');

var posts = [];

var PostStore = new Store(Dispatcher);

PostStore.findByTarget = function (targetId) {
  if (posts.length === 0) {
    PostApiUtil.fetchTargetedPosts(targetId);
  }
  return posts;
};

PostStore.acceptNewPost = function (post) {
  PostApiUtil.acceptNewPost(post);
};

PostStore.addNewComment = function (comment) {
  PostApiUtil.addNewComment(comment);
};

PostStore.emptyPosts = function (targetId) {
    posts = [];
};

PostStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case PostConstants.RECEIVED_POSTS:
      if (posts.length !== payload.posts.length || payload.posts.length !== 0) {
        posts = payload.posts;
        this.__emitChange();
      }
      break;
    case PostConstants.RECEIVE_UPDATED_POST:
      posts.unshift(payload.post);
      this.__emitChange();
      break;
    case PostConstants.RECEIVE_UPDATED_COMMENT:
      var comment = payload.comment;
      postIdx = posts.findIndex( function(el) { return (el.id === comment.commentable_id); });
      posts[postIdx].comments.push(comment);
      this.__emitChange();
      break;
    case PostConstants.DELETE_POST_COMMENT:
      if (posts.length !== 0) {
        var comment = payload.comment;
        postIdx = posts.findIndex( function(el) { return (el.id === comment.commentable_id); });
        commentIdx = posts[postIdx].comments.findIndex( function(el) { return (el.id === comment.id); });
        posts[postIdx].comments.splice(commentIdx, 1);
        this.__emitChange();
        break;
      }
  }
};

module.exports = PostStore;
