window.UserHeader = React.createClass({
  render: function () {
    if (this.props.item.user) {
      var user = this.props.item.user;
      return (
        <div className="user-profile-header group">
          <img src={user.image_url} />
          <section className="user-profile-info">
            <h2>{user.username}</h2>
            <ul>
              <li>{user.location}</li>
              <li>{user.website}</li>
            </ul>
          </section>
          <FriendRequestButton status={user.status} id={user.id}/>
          <footer className="user-profile-footer group">
            <ul>
              <li>
                <h4>{user.count}</h4>
                <h6>Total</h6>
              </li>
              <li>
                <h4>{user.uniqueCount}</h4>
                <h6>Unique</h6>
              </li>
              <li>
                <h4>9000</h4>
                <h6>Beer Score</h6>
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
