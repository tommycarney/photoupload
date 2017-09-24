import React, { PropTypes } from 'react';

import FineUploaderTraditional from 'fine-uploader-wrappers';
import Gallery from 'react-fine-uploader/gallery';
import update from 'immutability-helper';
import {PhotosList} from './photos_list'


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

  static propTypes = {
    photos: PropTypes.array.isRequired
  }

  static defaultProps = {
    photos: []
  }

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
     this.addNewPhoto(responseJSON.photo);

   });

   if(this.props.match) {
    $.ajax({
     type: "GET",
     url: '/photos',
     dataType: "JSON"
    }).done((data) => {
     this.setState({photos: data});
    });
   }

  }
    render() {
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
                <h1 className="jumbotron-heading">Upload Your Photos</h1>
                <p className="lead text-muted">Drag and drop photos to start uploading them</p>
                <Gallery uploader={ uploader } />
              </div>
            </section>
            <div className="album text-muted">
              <div className="container">
                <PhotosList photos={this.state.photos} />
              </div>
            </div>
          </div>
        );
    }
}

export default UploadComponent;
