var PhotosList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.photos.map(function(photo) {
          return (
            <Photo photo={photo} key={photo.id} />
          )
        })}
      </div>
    )
  }
})
