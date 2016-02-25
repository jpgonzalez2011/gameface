var React = require('react'),
    FriendStore = require('../../stores/friend_store'),
    FriendApiUtil = require('../../util/friend_api_util'),
    FriendGridItem = require('./friend_grid_item');

var FriendGrid = React.createClass({

  getInitialState: function () {
    return { gridFriends: [] };
  },

  __onChange: function (props) {
     this.setState({ gridFriends: FriendStore.friends().slice(0,9)});
  },

  componentDidMount: function () {
    this.storeCBToken = FriendStore.addListener( function () {
      this.setState(this.__onChange);
    }.bind(this));
    FriendApiUtil.fetchFriends(this.props.userId);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    FriendApiUtil.fetchFriends(newProps.userId);
  },

  render: function () {
    if (this.state.gridFriends[0] === "no friends yet") {
      return (
        <div className="friends-grid-container group">
          <h1 className="friends-grid-header">
            Friends <span className="friends-grid-header-count">- {FriendStore.friends().length}</span>
          </h1>
          No friends yet!
        </div>
      );
    } else if (this.state.gridFriends === "loading") {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div className="friends-grid-container group">
          <h1 className="friends-grid-header">
            Friends <span className="friends-grid-header-count">- {FriendStore.friends().length}</span>
          </h1>
          <ul className="friends-grid group">
            {this.state.gridFriends.map ( function (friend, i){
              return (
                <FriendGridItem friend={friend} key={i} />
              );
            })}
          </ul>
        </div>
      );
    }

  }
});

module.exports = FriendGrid;
