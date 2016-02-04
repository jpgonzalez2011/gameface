var Dispatcher = require('../dispatcher/dispatcher'),
    SearchConstants = require('../constants/search_constants');

var SearchActions = {
  receiveUsersResult: function (users) {
    Dispatcher.dispatch({
      actionType: SearchConstants.USER_SEARCH_RESULTS_RECEIVED,
      users: users
    });
  }
};

module.exports = SearchActions;
