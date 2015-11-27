window.FriendImages = React.createClass({
  renderImages: function () {
    return this.props.friends.map(function(friend){
      return (<li><img src={friend} /></li>);
    });
  },

  render: function () {
    return (
      <div className="sidebar-applet">
        <div className="sidebar-applet-header">
          <h4>Friends</h4>
        </div>
        <ul className="picture-list group">{this.renderImages()}</ul>
      </div>
    );
  }
});
