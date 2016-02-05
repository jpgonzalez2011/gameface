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
    var friendsToUpdate;
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

  fetchSurprise: function (userId) {
    $.ajax ({
      type: "GET",
      url: "api/friendships/surprise",
      dataType: "json",
      success: function(data) {
        var friends = data.friends;
        FriendActions.receiveFriends(friends);
      }
    });
  }
};

module.exports = FriendApiUtil;
