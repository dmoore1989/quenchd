(function (root) {
  var _comments = [];
  var CHANGE_EVENT = "CHANGE_EVENT";


  root.CommentStore = $.extend({}, EventEmitter.prototype, {


    all: function () {
      return _comments.slice();
    },

    addChangeHandler: function (callback) {
      CommentStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      CommentStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType){
        case QuenchdConstants.COMMENTS_RECEIVED:
          _comments = payload.comments;
          CommentStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

  root.CommentStore.setMaxListeners(100);
})(this);
