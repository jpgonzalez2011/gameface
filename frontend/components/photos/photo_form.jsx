var React = require('react'),
    PhotoStore = require('../../stores/photo_store'),
    CurrentUserStore = require('../../stores/current_user_store');

var PhotoForm = React.createClass({
  getInitialState: function () {
    return { title: "", imageFile: null, imageUrl: "", loading: false };
  },

  render: function () {
    if (this.state.loading) {
      return (
        <div className="photo-upload-container"> Uploading ..</div>
      );
    }
      return (
        <div className="photo-upload-container">
          <form className="photo-upload-form" onSubmit={this.handleSubmit}>
            <label htmlFor="photo">Add Photo!</label>
            <input type="file" id="photo" onChange={this.changeFile}/>
            <button> Submit </button>
          </form>
        </div>
      );
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },

  resetForm: function () {
    this.setState({ title: "", imageFile: null, imageUrl: "", loading: false });
    this.forceUpdate();
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var formData = new FormData();

    formData.append(
      "photo[uploader_id]",CurrentUserStore.currentUser().id
    );
    formData.append("photo[image]", this.state.imageFile);
    PhotoStore.acceptNewPhoto(formData, this.resetForm);
    this.setState({ loading: true });
  },
});

module.exports = PhotoForm;
