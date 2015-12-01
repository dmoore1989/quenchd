window.IndexType = React.createClass({
  changeType: function (e) {
    e.preventDefault();
    this.props.changeType(e.target.type);
  },

  selectedItem: function (elType) {
    if (elType === this.props.type) {
      return "title-nav selected";
    } else {
      return "title-nav";
    }
  },

  render: function () {
    return (
      <ul className="check-in-type group" onClick={this.changeType}>
        <li className={this.selectedItem("friends")} type="friends">Friends</li>
        <li className={this.selectedItem("all")} type="all">All</li>
        <li className={this.selectedItem("you")} type="you">You</li>
      </ul>
    );
  }
});
