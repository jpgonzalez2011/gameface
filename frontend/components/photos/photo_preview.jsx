var React = require('react'),
    PhotoShow = require('./photo_show');


var PhotoPreview = React.createClass({
  getInitialState: function () {
    return { show: false };
  },

  toggleShow: function () {
    this.setState({ show: !this.state.show});
  },

  render: function () {
    var imageBackground = {
      backgroundImage: 'url(' + this.props.photo.medium_url + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
     };
    return (
      <div onClick={this.toggleShow}>
        <li key={this.props.key} style={imageBackground}>
        </li>
        <PhotoShow mainTimeLine={false} photo={this.props.photo} show={this.state.show} />
      </div>
    );
  }
});

module.exports = PhotoPreview;
