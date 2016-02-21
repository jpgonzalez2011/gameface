var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store'),
    FriendStore = require('../../stores/friend_store'),
    FriendApiUtil = require('../../util/friend_api_util');


var FriendshipButton = React.createClass({
  getInitialState: function () {
    return {friendship: []}
  },

  __onChange: function () {
    this.setState({friendship: FriendStore.friendship()})
  },

  componentDidMount: function () {
    this.storeCBToken = FriendStore.addListener( function () {
      this.setState(this.__onChange);
    }.bind(this));
    FriendApiUtil.fetchFriendship(CurrentUserStore.currentUser().id, this.props.userId);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    FriendApiUtil.fetchFriendship(CurrentUserStore.currentUser().id, newProps.userId);
  },

  addFriend: function () {
    FriendApiUtil.addFriend(this.props.userId);
  },

  confirmFriend: function () {
    FriendApiUtil.confirmFriend(this.props.userId);
  },

  cancelFriend: function () {
    FriendApiUtil.cancelFriend(this.props.userId);
  },

  render: function () {
    if (CurrentUserStore.currentUser().id == this.props.userId) {
      return (
        <div>
        </div>
      );
    } else if (this.state.friendship.friendshipStatus == true) {
      return (
        <div>
          <button className="friendship-button">
            Friends!
          </button>
        </div>
      );
    } else if (this.state.friendship.friendshipStatus == false) {
      if (this.state.friendship.received_friend_id == CurrentUserStore.currentUser().id) {
        return (
          <div>
            <button onClick={this.cancelFriend} className="cancel-friendship-button"> Cancel Friend Request </button>
          </div>
        );
      } else if (this.state.friendship.requested_friend_id == CurrentUserStore.currentUser().id) {
        return (
          <div>
            <button onClick={this.confirmFriend} className="confirm-friendship-button"> Accept Friend Request </button>
          </div>
        );
      }
    } else {
      return (
        <div>
          <button onClick={this.addFriend} className="add-friendship-button"> Add Friend! </button>
        </div>
      );
    }
  }
});


module.exports = FriendshipButton;
