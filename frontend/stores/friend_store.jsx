var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    FriendConstants = require('../constants/friend_constants'),
    FriendApiUtil = require('../util/friend_api_util'),
    PostConstants = require('../constants/post_constants'),
    PhotoConstants = require('../constants/photo_constants'),
    TimelineConstants = require('../constants/timeline_constants');

var comment;
var friends = [];
var friendship = [];

var FriendStore = new Store(Dispatcher);


FriendStore.friends = function () {
    return friends;
};

FriendStore.friendship = function () {
  return friendship;
};

FriendStore.emptyFriends = function (userId) {
  if (friends.length > 0 && friends[0].user_id !== userId) {
    friends = [];
  }
};

FriendStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FriendConstants.RECEIVED_FRIENDS:
      if (payload.friends.length === 0) {
        friends = ["no friends yet"];
      } else {
        friends = payload.friends;
      }
      this.__emitChange();
      break;
    case FriendConstants.RECEIVE_NEW_FRIEND:
      friends.unshift(payload.friend);
      this.__emitChange();
      break;
    case FriendConstants.RECEIVED_FRIENDSHIP:
      friendship = payload.friendship;
      this.__emitChange();
      break;
    case FriendConstants.ADDED_FRIEND:
      friendship = payload.friendship;
      this.__emitChange();
      break;
    case FriendConstants.CONFIRMED_FRIEND:
      friendship = payload.friendship;
      FriendApiUtil.fetchFriends(friendship.received_friend_id);
      this.__emitChange();
      break;
    case FriendConstants.CANCEL_FRIEND:
      friendship = [];
      this.__emitChange();
      break;
    case PostConstants.RECEIVE_UPDATED_COMMENT:
      comment = payload.comment;
      FriendApiUtil.updateFriendshipRating(comment.commenter, comment.comment_target);
      break;
    case PhotoConstants.RECEIVE_UPDATED_PHOTO_COMMENT:
      comment = payload.comment;
      FriendApiUtil.updateFriendshipRating(comment.commenter, comment.comment_target);
      break;
    case PostConstants.RECEIVE_UPDATED_POST:
      post = payload.post;
      FriendApiUtil.updateFriendshipRating(post.poster_id, post.target_id);
      break;
    case TimelineConstants.NEW_COMMENT_MADE_ON_TIMELINE:
      comment = payload.comment;
      FriendApiUtil.updateFriendshipRating(comment.commenter, comment.comment_target);
      break;
  }
};

module.exports = FriendStore;
