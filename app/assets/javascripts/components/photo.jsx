var Photo = React.createClass({
  render: function() {
    return (
      <img src={'https:' + this.props.photo.url } alt={this.props.photo.alt_text} id={this.props.photo.id} width="200px" />
    )
  }
})
