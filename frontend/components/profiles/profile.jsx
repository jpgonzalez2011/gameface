var React = require('react'),
    ProfileStore = require('../../stores/profile_store'),
    FriendshipButton = require('./friendship_button'),
    FriendStore = require('../../stores/friend_store'),
    ProfileNav = require('./profile_nav'),
    History = require('react-router').History;

var Profile = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { profile: ProfileStore.find(this.props.params.userId) };
  },

  getStateFromStore: function (props) {
    return (
      { profile: ProfileStore.find(props.params.userId) }
    );
  },

  componentDidMount: function () {
    this.storeCBToken = ProfileStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
  },

  componentWillMount: function () {
    this.getStateFromStore(this.props);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(this.getStateFromStore(newProps));
  },

  render: function () {
    debugger
    return (
      <div className="main-div">
        <header className="profile-header-box group">
          <div className="cover-photo-box">
            <img src={this.state.profile.cover_url} />
            <FriendshipButton userId={this.props.params.userId}/>
            <h1 className="profile-username-display"> {this.state.profile.full_name} </h1>
          </div>
          <ProfileNav userId={this.props.params.userId}/>
          <div className="profile-picture-box">
            <img src={this.state.profile.profile_medium_url} />
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Profile;
