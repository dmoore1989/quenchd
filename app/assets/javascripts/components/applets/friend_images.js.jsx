window.FriendImages = React.createClass({
  renderImages: function () {
    return this.props.friends.map(function(friend){
      return (<li><img src={friend} /></li>);
    });
  },

  render: function () {
    return (<ul>{this.renderImages()}</ul>);
  }
});
