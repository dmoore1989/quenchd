window.BreweryForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return ({
      name: "",
      location: "",
      imageUrl: "",
      imageFile: null
    });
  },

  changeFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function () {
      that.setState({imageUrl: reader.result, imageFile: file});
    };


    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },

  createBrewery: function(e) {
    e.preventDefault();

    var name = this.state.name;
    var location = this.state.location;
    var image = this.state.imageFile;

    var formData = new FormData();
    formData.append('brewery[name]', name);
    formData.append('brewery[location]', location);
    formData.append('brewery[image]', image);

    BreweryApiUtil.createBrewery(formData, this.routeToBrewery);
  },

  routeToBrewery: function (breweryId) {
    var link  = "/breweries/" + breweryId;
    this.props.history.pushState(null, link);
  },

  render: function() {
    return(
      <main>
        <section className="new-item">
          <section className="new-item-header">
            <h2>NEW BREWERY!</h2>
            <h6>Note: Your home brewery is not a valid brewery.
            </h6>
          </section>


          <section className="landing-modal-title">
            <form className="landing-form" onSubmit={this.createBrewery}>
              <div className="sign-up group">
                <label>Brewery
                  <input type="text" valueLink={this.linkState('name')}/>
                </label>
                <label>Location
                  <input type="text" valueLink={this.linkState('location')}/>
                </label>

                <label>Upload a Picture
                  <input type="file" onChange={this.changeFile} />
                </label>

                <button className="submit-button">Create!</button>
              </div>
            </form>
            <img src={this.state.imageUrl} />
          </section>
        </section>
      </main>
    );
  }



});
