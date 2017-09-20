var PhotoForm = React.createClass({
  handleChange: function(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },
  render: function(){
     return (
       <div>
        <h2> Upload a photo</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="url" placeholder="Enter image url" defaultValue={this.props.input_url} onChange={this.handleChange} />
          <input name="alt_text" placeholder="Enter Alt text" defaultValue={this.props.input_alt_text} onChange={this.handleChange} />
          <input type="submit" value="Upload Photo" />
        </form>
      </div>
    )
  }
})
