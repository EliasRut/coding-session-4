import React from 'react'
import Navigation from './Navigation';

class Planets extends React.Component {
  render() {
    return (
      <div>
      <Navigation
        activePage={this.props.location.pathname}
      />
				Planets Page<br />

        Number of clicks on some buttons: {this.props.buttonsClicked}
      </div>
    )
  }
}

export default Planets;