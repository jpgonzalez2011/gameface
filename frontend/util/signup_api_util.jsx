var CurrentUserActions = require('../actions/current_user_actions');

var SignUpApiUtil = {
  submitNewUser: function (newUser) {
    $.ajax({
      type: "POST",
      url: "api/users",
      dataType: "json",
      data: newUser,
      success: function (data) {
        CurrentUserActions.newUserReceived(data);
      }
    });
  }
};

module.exports = SignUpApiUtil;
