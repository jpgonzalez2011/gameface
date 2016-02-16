var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    FriendStore = require('../../stores/friend_store'),
    FriendApiUtil = require('../../util/friend_api_util');


var FriendshipButton = React.createClass({
  getInitialState: function () {
    return {friendshipStatus: []}
  },

  __onChange: function () {
    this.setState({friendshipStatus: FriendStore.friendshipStatus()})
  },

  componentDidMount: function () {
    this.storeCBToken = FriendStore.addListener( function () {
      this.setState(this.__onChange);
    }.bind(this));
    FriendApiUtil.fetchFriendshipStatus(CurrentUserStore.currentUser().id, this.props.userId);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    FriendApiUtil.fetchFriendshipStatus(CurrentUserStore.currentUser().id, newProps.userId);
  },

  render: function () {
    if (this.state.friendshipStatus == true) {
      return (
        <div>
          <button className="friendship-button"> Friends! </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="friendship-button"> Friendship Button </button>
        </div>
      );
    }
  }
});


module.exports = FriendshipButton;
