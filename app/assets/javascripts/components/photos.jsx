var Photos = React.createClass({

  getInitialState: function(){
    return {
      photos: this.props.photos,
      url: 'Enter a url',
      alt_text: 'Enter the alt text',
      image: {}

    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function(formData){

    var photo = { "photos": { formData } };

            );

  },

  addNewPhoto: function(photo) {
    var photos = React.addons.update(this.state.photos, { $push: [photo] });
    this.setState({ photos: photos});
  },

  render: function() {
    return (
      <div>
        <PhotoForm url={this.state.url}
                   alt_text={this.state.alt_text}
                   onUserInput={this.handleUserInput}
                   onFormSubmit={this.handleFormSubmit} />
        <PhotosList photos={this.state.photos} />
      </div>
    )
  }
})
