import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UploadComponent from './upload_component';
import PhotosList from './photos_list'
import Photo from './photo'
import { AppHeader } from './AppHeader'


export default (props) => {
  return (
    <Router>
      <div>
          <Route path="/" component={AppHeader} />
          <Route exact path="/" render={ routeProps => (
             <UploadComponent {...routeProps} photos={props.photos} />
          )} />
          <Route exact path="/photos/:id" component={Photo} />
        </div>
    </Router>
  )
}
