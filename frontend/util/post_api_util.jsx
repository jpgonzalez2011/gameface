var PostActions = require('../actions/post_actions'),
    TimelineActions = require('../actions/timeline_actions');


var PostApiUtil = {
  fetchTargetedPosts: function (targetId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + targetId + "/posts",
      dataType: "json",
      success: function (data) {
        var posts = data.posts;
        PostActions.receivePosts(posts);
      }
    });
  },

  acceptNewPost: function (post, resetCallback) {
    $.ajax({
      type: "POST",
      url: "api/posts/",
      dataType: "json",
      data: post,
      success: function (data) {
        PostActions.receiveUpdatedPost(data);
      }
    });
  },

  addNewComment: function (comment) {
    $.ajax({
      type: "POST",
      url: "api/comments/",
      dataType: "json",
      data: comment,
      success: function (data) {
        if (comment.comment.mainTimeLine) {
          TimelineActions.receiveNewComment(data);
        } else {
          PostActions.receiveUpdatedComment(data);
        }
      }
    });
  },

  deleteComment: function (postId, commentId, mainTimeLine) {
    url = "api/comments/" + commentId;
    $.ajax({
      type: "DELETE",
      url: url,
      dataType: "json",
      success: function (data) {
        if (mainTimeLine) {
          TimelineActions.deleteComment(postId, commentId);
        } else {
          PostActions.deleteComment(postId, commentId);
        }
      }
    });
  }
};

module.exports = PostApiUtil;
