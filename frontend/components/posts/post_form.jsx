var React = require('react'),
    PostStore = require('../../stores/post_store'),
    CurrentUserStore = require('../../stores/current_user_store');

var PostForm = React.createClass({
  getInitialState: function () {
    return ({
      text: "",
      showFooter: false
    });
  },

  render: function () {
    if (this.state.showFooter) {
      return (
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}>
            <label className="post-form-header" htmlFor="text">
              Make a Post, {CurrentUserStore.currentUser().fname}
            </label>
            <div className="post-form-input-container group">
              <img className="post-form-input-picture" src={CurrentUserStore.currentUser().profile_thumb_url}/>
              <input className="post-form-input" type="text" id="text" placeholder="What's on your mind?" onChange={this.changeText}/>
            </div>
            <feature className="post-form-footer group">
              <button className="post-form-button"> Post </button>
            </feature>
          </form>
        </div>
      );
    } else {
      return (
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}>
            <label className="post-form-header" htmlFor="text">
              Make a Post, {CurrentUserStore.currentUser().fname}
            </label>
            <div className="post-form-input-container group">
              <img className="post-form-input-picture" src={CurrentUserStore.currentUser().profile_thumb_url}/>
              <input className="post-form-input" type="text" id="text" placeholder="What's on your mind?" onClick={this.showFooter} onChange={this.changeText}/>
            </div>
          </form>
        </div>
      );
    }
  },

  changeText: function(e) {
    this.setState({ text: e.target.value });
  },

  showFooter: function (e) {
    this.setState({ showFooter: true })
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var post = { post:
        {
        content: this.state.text,
        poster_id: CurrentUserStore.currentUser().id,
        target_id: this.props.userId
      }
    }

    PostStore.acceptNewPost(post);

    this.resetForm();
  },

  resetForm: function (e) {

    $(".post-form-input").val("");
    this.setState({ text: "", showFooter: false })
  }
});

module.exports = PostForm;
