var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    CurrentUserConstants = require('../constants/current_user_constants'),
    TimelineApiUtil = require('../util/timeline_api_util'),
    CurrentUserApiUtil = require('../util/current_user_api_util');

var _currentUser = {};
var _loginFailure = false;

var CurrentUserStore = new Store(Dispatcher);

CurrentUserStore.currentUser = function () {
  if (_currentUser.id) {
    return $.extend({}, _currentUser);
  } else {
    CurrentUserApiUtil.checkForExistingUser();
    return {};
  }
};

CurrentUserStore.loginFailure = function () {
  return _loginFailure;
};

CurrentUserStore.loggedIn = function () {
  return !!_currentUser.id;
};

CurrentUserStore.logOut = function () {
  CurrentUserApiUtil.logOut();
};

CurrentUserStore.acceptCredentials = function (credentials) {
  CurrentUserApiUtil.transmitCredentials(credentials);
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CurrentUserConstants.NEW_USER_RECEIVED:
      _currentUser = payload.currentUser[0];
      this.__emitChange();
      TimelineApiUtil.fetchAllItems();
      break;
    case CurrentUserConstants.EXISTING_USER_RECEIVED:
      if (payload.currentUser[0].id === "no-user-found") {
        break;
      }
      _currentUser = payload.currentUser[0];
      this.__emitChange();
      TimelineApiUtil.fetchAllItems();
      break;
    case CurrentUserConstants.LOGIN_FAILURE:
      _loginFailure = true;
      break;
    case CurrentUserConstants.LOG_OUT:
      _currentUser = {};
      this.__emitChange();
      break;
  }
};


module.exports = CurrentUserStore;
