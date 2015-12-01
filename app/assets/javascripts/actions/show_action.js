window.ShowAction = {
  clearShow: function () {
    AppDispatcher.dispatch({
      actionType: QuenchdConstants.ITEM_CLEARED
    });
  }
};
