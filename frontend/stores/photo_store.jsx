var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    PhotoConstants = require('../constants/photo_constants'),
    PhotoApiUtil = require('../util/photo_api_util');

var photos = [];

var PhotoStore = new Store(Dispatcher);

PhotoStore.findByOwner = function (ownerId) {
  if (photos.length > 0 && (photos[0].uploader_id == ownerId || photos[0] === "no photos")) {
    return photos;
  } else {
    photos = "loading";
    PhotoApiUtil.fetchOwnedPhotos(ownerId);
    return photos;
  }
};

PhotoStore.acceptNewPhoto = function (photo, resetCallback) {
  PhotoApiUtil.acceptNewPhoto(photo, resetCallback);
};

PhotoStore.addNewComment = function (comment) {
  PhotoApiUtil.addNewComment(comment);
};

PhotoStore.emptyPhotos = function (userId) {
  if (photos.length > 0 && photos[0].uploader_id !== userId ) {
    photos = [];
  }
};

PhotoStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case PhotoConstants.RECEIVED_PHOTOS:
      if (payload.photos.length === 0) {
        photos = ["no photos"];
      } else {
        photos = payload.photos;
      }
      this.__emitChange();
      break;
    case PhotoConstants.RECEIVE_UPDATED_PHOTO:
      photos.unshift(payload.photo);
      this.__emitChange();
      break;
    case PhotoConstants.RECEIVE_UPDATED_COMMENT:
      var comment = payload.comment;
      photoIdx = photos.findIndex( function (el) {return (el.id === comment.commentable_id); });
      photos[photoIdx].comments.push(comment);
      this.__emitChange();
      break;
    case PhotoConstants.DELETE_PHOTO_COMMENT:
      if (photos.length !== 0) {
        var comment = payload.comment;
        photoIdx = photos.findIndex( function(el) { return (el.id === comment.commentable_id); });
        commentIdx = photos[photoIdx].comments.findIndex( function(el) { return (el.id === comment.id); });
        photos[photoIdx].comments.splice(commentIdx, 1);
        this.__emitChange();
        break;
      }
  }
};

module.exports = PhotoStore;
