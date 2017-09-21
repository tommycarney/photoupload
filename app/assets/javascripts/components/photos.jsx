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

  handleFormSubmit: function(form){
    var formData = new FormData(form);
    $.ajax({
     url: "/photos",
     type: "POST",
     data: formData,
     processData: false,
     contentType: false,
   }).done(function(data){
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
        <PhotoForm url={this.state.url}
                   alt_text={this.state.alt_text}
                   onUserInput={this.handleUserInput}
                   onFormSubmit={this.handleFormSubmit} />
        <PhotosList photos={this.state.photos} />

      </div>
    )
  }
})
