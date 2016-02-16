var FriendActions = require('../actions/friend_actions');


var FriendApiUtil = {
  fetchFriends: function (userId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + userId + "/friendships",
      dataType: "json",
      success: function (data) {
        var friends = data.friends;
        FriendActions.receiveFriends(friends);
      }
    });
  },

  updateFriendshipRating: function (firstUser, secondUser) {
    var friends;
    friends = [firstUser, secondUser];
    $.ajax ({
      type: "PATCH",
      url: "api/friendships/ratings",
      dataType: "json",
      data: {firstFriend: firstUser, secondFriend: secondUser},
      success: function (data) {
        var friends = data.friends;
        FriendActions.receiveFriends(friends);
      }
    });
  },

  fetchFriendshipStatus: function (currentUser, otherUser) {
    var friends = [currentUser, otherUser];
    $.ajax ({
      type: "GET",
      url: "api/friendships/checkfriends",
      dataType: "json",
      data: {firstFriend: currentUser, secondFriend: otherUser},
      success: function (data) {
        var friendshipStatus = data.friendship;
        FriendActions.receiveFriendshipStatus(friendshipStatus);
      }
    })
  }
};

module.exports = FriendApiUtil;
