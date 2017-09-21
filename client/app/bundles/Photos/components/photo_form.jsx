import React from 'react';

export default class PhotoForm extends React.component{


  handleChange (e) {
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleFileChange (e){
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.files[0];
    this.props.onUserInput(obj);
  }

  handleSubmit (e) {
    e.preventDefault();
    const form = e.target
    this.props.onFormSubmit(form);
  }
  render () {
     return (
       <div>
        <h2> Upload a photo</h2>
        <form onSubmit={this.handleSubmit.bind(this)} encType='multipart/form-data'>
          <input name="url" placeholder="Enter image url" value={this.props.url} onChange={this.handleChange.bind(this)} />
          <input name="alt_text" placeholder="Enter Alt text" value={this.props.alt_text} onChange={this.handleChange.bind(this)} />
          <input type="file" name="image"  onChange={this.handleFileChange.bind(this)} />
          <input type="submit" value="Upload Photo" />
        </form>
      </div>
    )
  }
}
