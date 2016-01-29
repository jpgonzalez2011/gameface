var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    PhotoConstants = require('../constants/photo_constants'),
    PhotoApiUtil = require('../util/photo_api_util');

var photos = [];

var PhotoStore = new Store(Dispatcher);

PhotoStore.findByOwner = function (ownerId) {
  if (photos.length === 0) {
    PhotoApiUtil.fetchOwnedPhotos(ownerId);
  }
  return photos;
};

PhotoStore.__onDispatch = function (payload) {
  switch (payload.actionType) {

    case PhotoConstants.RECEIVED_PHOTOS:
      photos = payload.photos;
      this.__emitChange();
      break;
  }
};

module.exports = PhotoStore;
