var SearchActions = require('../actions/search_actions');

var SearchApiUtil = {
  fetchUsers: function (query) {
    $.ajax({
      type: "GET",
      url: "api/search/?query=" + query,
      dataType: "json",
      success: function (data) {
        var results = data.results;
        SearchActions.receiveUsersResult(results) ;
      }
    });
  }
};

module.exports = SearchApiUtil;
