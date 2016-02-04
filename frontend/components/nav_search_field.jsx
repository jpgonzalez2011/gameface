var React = require('react');

var NavSearchField = React.createClass({
  getInitialState: function () {
    return {search: ""};
  },

  render: function () {
    return (
      <input className="nav-search-field" placeholder="Up Up Down Down Left Right Left Right B A Start" type="text" value={this.state.search}/>
    );
  }
});

module.exports = NavSearchField;
