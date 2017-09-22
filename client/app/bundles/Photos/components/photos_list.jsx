import React from 'react';
import Photo from './photo'

export const PhotosList = ({photos}) =>
  <div>
    {photos.map(function(photo) {
      return (
        <Photo photo={photo} key={photo.id} />
      )
    })}
  </div>
