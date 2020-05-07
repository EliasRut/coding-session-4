import React from 'react'
import Navigation from './Navigation';

class Blog extends React.Component {
  render() {
    return (
      <div>
			<Navigation
				activePage={this.props.location.pathname}
			/>
				Blog Page<br />

        Number of clicks on some buttons: {this.props.buttonsClicked}
      </div>
    )
  }
}

export default Blog;