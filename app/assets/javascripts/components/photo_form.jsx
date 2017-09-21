var PhotoForm = React.createClass({
  handleChange: function(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleChange: function(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleFileChange: function(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.files[0];
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var form = e.target
    var formData = new FormData(form);
    this.props.onFormSubmit(form);
  },
  render: function(){
     return (
       <div>
        <h2> Upload a photo</h2>
        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
          <input name="url" placeholder="Enter image url" value={this.props.url} onChange={this.handleChange} />
          <input name="alt_text" placeholder="Enter Alt text" value={this.props.alt_text} onChange={this.handleChange} />
          <input type="file" name="image" onChange={this.handleFileChange} />
          <input type="submit" value="Upload Photo" />
        </form>
      </div>
    )
  }
})
