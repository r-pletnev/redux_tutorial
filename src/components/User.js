import React, {Proptypes, Components} from 'react'

export default class User extends Components {
  render() {
    const {name} = this.props
    return <div>
        <p>Hello, {name}!</p>
        </div>
  }

}

User.propTypes = {
  name: PropTypes.string.isRequired

}
