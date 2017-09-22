import React from 'react';

import FineUploaderTraditional from 'fine-uploader-wrappers';
import Gallery from 'react-fine-uploader/gallery';
import 'react-fine-uploader/gallery/gallery.css';
import update from 'immutability-helper';


const uploader = new FineUploaderTraditional({
    options: {
        chunking: {
            enabled: true,
            success: {
              endpoint: "/uploads_finish"
            }
        },
        deleteFile: {
            enabled: false,
        },
        request: {
            endpoint: '/uploads'
        },
        retry: {
            enableAuto: true
        }
    }
})

class UploadComponent extends React.Component {
  constructor(props, railsContext){
    super(props)
    this.state = {
      photos: this.props.photos
    }
  }

  addNewPhoto(photo) {
      const photos = update(this.state.photos, { $push: [photo] });
      this.setState({ photos: photos});
    }

  componentDidMount(){
   const auth_token = $('meta[name="csrf-token"]').attr('content');
   uploader.on('onComplete', (id, name, responseJSON) => {
     console.log(responseJSON.photo);
     this.addNewPhoto(responseJSON.photo);
   })
  }
    render() {
      const photos = this.state.photos.map((photo) =>
         <div className="card" key={photo.id}>
           <img src={photo.url} className="image-responsive"></img>
           <p className="card-text">{photo.id}</p>
         </div>
       );
        return (
          <div>
            <div className="blog-masthead">
              <div className="container">
                <nav className="nav blog-nav">
                  <a className="nav-link active" href="#">{this.props.brand_name}</a>
                </nav>
              </div>
            </div>
            <section className="jumbotron text-xs-center">
              <div className="container">
                <h1 className="jumbotron-heading">Photos Example App</h1>
                <p className="lead text-muted">This is example app integrated ReactFineUploader with Ruby on Rails</p>
                <Gallery uploader={ uploader } />
              </div>
            </section>
            <div className="album text-muted">
              <div className="container">
                <div className="row">
                  {photos}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default UploadComponent;
