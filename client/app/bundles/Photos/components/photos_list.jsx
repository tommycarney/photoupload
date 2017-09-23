import React from 'react';
import Photo from './photo'

export const PhotosList = ({photos}) =>
  <div className="row">
    {photos.map(function(photo) {
      return (
        <Photo photo={photo} key={photo.id} />
      )
    })}
  </div>
