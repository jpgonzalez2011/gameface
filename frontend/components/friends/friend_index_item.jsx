var React = require('react');

var FriendIndexItem = React.createClass({

  render: function () {
    var url = "#/users/" + this.props.friend.id;
    return (
      <div>
        <figure className="friend-picture-container">
          <img className="friend-picture" src={this.props.friend.profile_small_url} />
        </figure>
        <h2 className="friend-name">{this.props.friend.full_name}</h2>
      </div>
    );
  }
});

module.exports = FriendIndexItem;
