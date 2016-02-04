var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    SearchConstants = require('../constants/search_constants');

var SearchStore = new Store(Dispatcher);

var userSearchResults = [];

SearchStore.userSearchResults = function () {
  return userSearchResults;
};

SearchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchConstants.USER_SEARCH_RESULTS_RECEIVED:
      userSearchResults = payload.users;
      this.__emitChange();
  }
};

module.exports = SearchStore;
