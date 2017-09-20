var Photo = React.createClass({
  render: function() {
    return (
      <img src={this.props.photo.url} alt={this.props.photo.alt_text} width="200px" />
    )
  }
})
