var React = require('react'),
    SignUpApiUtil = require('../util/signup_api_util');

var SignUpForm = React.createClass({
  getInitialState: function () {
    return (
      { username: "",
        firstName: "",
        lastName: "",
        password: "",
        birthdayMonth: "",
        birthdayDay: "",
        birthdayYear: "",
        creatingUser: false
      }
    );
  },

  yearRange: function () {
    range = [];
    current_year = new Date().getFullYear();
    for (i = current_year; i > 1949 + 1; i--) {
      range.push(i);
    }
    return range;
  },

  updateUsername: function (e) {
    this.setState({ username: e.target.value.toLowerCase() });
  },

  updateFname: function (e) {
    this.setState({ fname: e.target.value });
  },

  updateLname: function (e) {
    this.setState({ lname: e.target.value });
  },

  updatePassword: function (e) {
    this.setState({ password: e.target.value });
  },

  updateBirthdayMonth: function (e) {
    this.setState({ birthdayMonth: e.target.value });
  },

  updateBirthdayDay: function (e) {
    this.setState({ birthdayDay: e.target.value });
  },

  updateBirthdayYear: function (e) {
    this.setState({ birthdayYear: e.target.value });
  },

  onSubmit: function (e) {
    e.preventDefault();
    var newUser = { newUser: this.state }
    SignUpApiUtil.submitNewUser(newUser);
    this.setState({ creatingUser: true })
  },

  render: function () {
    var buttonText;
    if (this.state.creatingUser) {
      buttonText = "Creating account..."
    } else {
      buttonText = "Sign Up"
    }
    return (
    <div className="landing-page-container">
      <div className="right-side-container group">
        <div className="sign-up-form">
          <header className="sign-up-form-header">
            Sign Up
          </header>
          <header className="sign-up-form-tagline">
            Games are fun and always will be.
          </header>
          <div className="group">
            <input onChange={this.updateFname} className="first-name-input" placeholder="First name"/>
            <input onChange={this.updateLname} className="last-name-input" placeholder="Last name"/>
          </div>
          <input onChange={this.updateUsername} className="username-input" placeholder="Username"/>
          <input onChange={this.updatePassword} className="password-input" placeholder="Password"/>
          <header className="birthday-header">
            Birthday
          </header>
          <div className="group">
            <select onChange={this.updateBirthdayMonth} aria-label="Month" title="Month" className="birthday-selector" defaultValue="0">
              <option value="0">Month</option>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            <select onChange={this.updateBirthdayDay} aria-label="Month" title="Month" className="birthday-selector" defaultValue="0">
              <option value="0">Day</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select onChange={this.updateBirthdayYear} aria-label="Year" title="Year" className="birthday-selector" defaultValue="0">
              <option value="0">Year</option>
              {this.yearRange().map( function (year, i) {
                return (
                  <option key={i} value={year}>{year}</option>
                );
              })}
            </select>
          </div>
          <button onClick={this.onSubmit} className="sign-up-submit-button">{buttonText}</button>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = SignUpForm;
