var React = require('react');
var History = require('react-router').History;
var CurrentUserApiUtil = require('./../../util/current_user_api_util');

var SessionForm = React.createClass({
  


  render: function() {

    return (
      <form onSubmit={ this.submit }>
        <a href="/auth/facebook">LOG IN WITH FACEBOOK</a>

        <h1>Logn In!</h1>

        <label>
          Email
          <input type="text" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button>Log In!</button>
      </form>
    );
  },

});

module.exports = SessionForm;
