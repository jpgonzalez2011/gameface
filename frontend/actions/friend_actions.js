var Dispatcher = require('../dispatcher/dispatcher'),
    FriendConstants = require('../constants/friend_constants');


var FriendActions = {
  receiveFriends: function (friends) {
    Dispatcher.dispatch({
      actionType: FriendConstants.RECEIVED_FRIENDS,
      friends: friends
    });
  },

  receiveFriendshipStatus: function (friendshipStatus) {
    Dispatcher.dispatch({
      actionType: FriendConstants.RECEIVED_FRIENDSHIP_STATUS,
      friendshipStatus: friendshipStatus
    });
  }
};

module.exports = FriendActions;
