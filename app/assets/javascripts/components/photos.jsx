var Photos = React.createClass({

  getInitialState: function(){
    return {
      photos: this.props.photos,
      url: 'Enter a url',
      alt_text: 'Enter the alt text'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function(){
    var photo = {url: this.state.url, alt_text: this.state.alt_text};
    $.post('/photos',
            {photo: photo})
            .done(function(data){
              this.addNewPhoto(data);
            }.bind(this));
  },

  addNewPhoto: function(photo) {
    var photos = React.addons.update(this.state.photos, { $push: [photo] });
    this.setState({ photos: photos});
  },

  render: function() {
    return (
      <div>
        <PhotoForm input_url={this.state.url}
                   input_alt_text={this.state.alt_text}
                   onUserInput={this.handleUserInput}
                   onFormSubmit={this.handleFormSubmit} />
        <PhotosList photos={this.state.photos} />
      </div>
    )
  }
})
