var Dispatcher = require('../dispatcher/dispatcher'),
    FriendConstants = require('../constants/friend_constants');


var FriendActions = {
  receiveFriends: function (friends) {
    Dispatcher.dispatch({
      actionType: FriendConstants.RECEIVED_FRIENDS,
      friends: friends
    });
  },

  receiveFriendship: function (friendship) {
    Dispatcher.dispatch({
      actionType: FriendConstants.RECEIVED_FRIENDSHIP,
      friendship: friendship
    });
  },

  addFriend: function (friendship) {
    Dispatcher.dispatch({
      actionType: FriendConstants.ADDED_FRIEND,
      friendship: friendship
    });
  },

  confirmFriend: function (friendship) {
    Dispatcher.dispatch({
      actionType: FriendConstants.CONFIRMED_FRIEND,
      friendship: friendship
    });
  }
};

module.exports = FriendActions;
