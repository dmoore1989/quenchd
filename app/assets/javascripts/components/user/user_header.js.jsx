window.UserHeader = React.createClass({
  render: function () {
    if (this.props.item.user) {
      var user = this.props.item.user;
      return (
        <div className="user-profile-header group">
          <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=abstract%20user&w=125&h=125" />
          <section className="user-profile-info">
            <h2>{user.username}</h2>
            <ul>
              <li>{user.location}</li>
              <li>{user.website}</li>
            </ul>
          </section>
          <footer className="user-profile-footer group">
            <ul>
              <li>
                <h4>9,000</h4>
                <h6>total</h6>
              </li>
              <li>
                <h4>6,517</h4>
                <h6>Unique</h6>
              </li>
              <li>
                <h4>0</h4>
                <h6>Badges</h6>
              </li>
              <li>
                <h4>150</h4>
                <h6>friends</h6>
              </li>
            </ul>
          </footer>
        </div>
        );
      } else {
        return (<div></div>);
      }
  }
});
