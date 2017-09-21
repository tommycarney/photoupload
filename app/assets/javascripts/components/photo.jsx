var Photo = React.createClass({
  render: function() {
    return (
      <img src={'https:' + this.props.photo} alt={this.props.photo.alt_text} width="200px" />
    )
  }
})
