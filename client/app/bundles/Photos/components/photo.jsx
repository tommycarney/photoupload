import React from 'react';

export const Photo = ({photo}) =>
  <div className='photo'>
      <img src={'https:' + photo.url } alt={photo.alt_text} id={photo.id} width="200px" />
  </div>
