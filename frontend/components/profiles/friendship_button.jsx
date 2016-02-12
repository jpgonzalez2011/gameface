var React = require('react'),
    FriendStore = require('../../stores/friend_store'),
    FriendApiUtil = require('../../util/friend_api_util');


var FriendshipButton = React.createClass({
  render: function () {
    return (
      <div>
        <button className="friendship-button"> FriendShipButton </button>
      </div>
    );
  }
});


module.exports = FriendshipButton;
