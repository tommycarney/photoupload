import React from 'react';

export const Photo = ({photo}) =>
  <div className='photo'>
      <img src={'https:' + this.props.photo.url } alt={this.props.photo.alt_text} id={this.props.photo.id} width="200px" />
  </div>
