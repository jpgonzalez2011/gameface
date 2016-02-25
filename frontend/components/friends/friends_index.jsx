var React = require('react'),
    FriendStore = require('../../stores/friend_store'),
    FriendIndexItem = require('./friend_index_item'),
    FriendApiUtil = require('../../util/friend_api_util');

var FriendsIndex = React.createClass({
  getInitialState: function () {
    return {friends: []};
  },

  __onChange: function (props) {
     this.setState({ friends: FriendStore.friends() });
  },

  componentDidMount: function () {
    this.storeCBToken = FriendStore.addListener( function () {
      this.setState(this.__onChange);
    }.bind(this));
    FriendApiUtil.fetchFriends(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    FriendApiUtil.fetchFriends(newProps.params.userId);
  },

  render: function () {
    if (this.state.friends[0] === "no friends yet") {
      return (
        <div className="friends-container group">
          <h1 className="friends-header">
            FRIENDS
          </h1>
          No friends yet!
        </div>
      );
    } else if (this.state.friends === "loading") {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div className="friends-container group">
          <h1 className="friends-header">
            Friends <span className="friends-grid-header-count">- {this.state.friends.length}</span>
          </h1>
          <ul className="friends-list group">
              {this.state.friends.map ( function (friend, i) {
                var url = "#/users/" + friend.id;
                  return (
                    <a key={i} href={url}>
                      <li className="friend-item group">
                        <FriendIndexItem friend={friend} key={i} />
                      </li>
                    </a>
                  );
                }
              )}
          </ul>
        </div>
      );
    }
  }
});

module.exports = FriendsIndex;
