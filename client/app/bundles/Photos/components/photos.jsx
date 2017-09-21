import React from 'react';
import PhotoForm from './photo_form';
import { PhotosList } from './photos_list';
import update from 'immutability-helper';



export default class Photos extends React.Component {

    constructor (props) {
     super(props)
      this.state = {
        photos: this.props.photos,
        url: 'Enter a url',
        alt_text: 'Enter the alt text'
      }
    }

    handleUserInput (obj) {
      this.setState(obj);
    }

    handleFormSubmit (form){
      const formData = new FormData(form);
      $.ajax({
       url: "/photos",
       type: "POST",
       data: formData,
       processData: false,
       contentType: false,
     }).done((data) => {
                this.addNewPhoto(data);
              });

    }

    addNewPhoto (photo) {
      const photos = update(this.state.photos, { $push: [photo] });
      this.setState({ photos: photos});
    }

    render () {
      return (
        <div>
          <PhotoForm
                   onFileChange={this.handleUserInput.bind(this)}
                   onFormSubmit={this.handleFormSubmit.bind(this)}
                     />
          <PhotosList photos={this.state.photos} />

        </div>
      )
    }
}
