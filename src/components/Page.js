import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
  render() {
    const {year, photos} = this.props
    return <div>
        <p>You are have {photos.length} photos from year {year}</p>
        </div>
  }

}


Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired
}

