import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class Photo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photo: props.photo
    }
  }

  static propTypes = {
    photo: PropTypes.object.isRequired
  }

  static defaultProps = {
    photo: {}
  }

  componentDidMount () {
    if(this.props.match) {
      $.ajax({
        type: "GET",
        url: `/photos/${this.props.match.params.id}`,
        dataType: "JSON"
      }).done((data) => {
        this.setState({photo: data});
      });
    }
  }

  render () {
    return (
      <div className='card'>
        <Link to={`/photos/${this.state.photo.id}`} >
          <img src={this.state.photo.url} className="image-responsive" ></img>
        </Link>
      </div>
     )
  }
}
