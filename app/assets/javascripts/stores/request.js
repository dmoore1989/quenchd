(function (root) {
  var _requests = [];
  var CHANGE_EVENT = "CHANGE_EVENT";

  root.RequestStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _requests.slice();
    },

    addChangeHandler: function (callback) {
      RequestStore.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      RequestStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
      }
    })
  });
})(this);
