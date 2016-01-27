var React = require('react'),
    ProfileStore = require('../../stores/profile_store'),
    apiUtil = require('../../util/api_util');

var Profile = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore(this.props);
  },

  getStateFromStore: function (props) {
    return (
      // { profile: ProfileStore.find(this.props.params.userId) }
      { profile: ProfileStore.find(props.params.userId) }
    );
  },

  componentDidMount: function () {
    this.storeCBToken = ProfileStore.addListener( function () {
      this.setState(this.getStateFromStore(this.props));
    }.bind(this));
    // apiUtil.fetchSingleProfile(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.storeCBToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState(this.getStateFromStore(newProps));
    // apiUtil.fetchSingleProfile(newProps.params.userId);
  },

  render: function () {
    return (
      <div>
        <header className="profile-header-box">
          <div className="cover-photo-box">
            <img src={this.state.profile.cover_photo} />
          </div>
        </header>
      </div>
    );
  }
});

module.exports = Profile;
