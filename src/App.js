import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import { Router } from "@reach/router"
import Planets from './Planets';
import Blog from './Blog';

class App extends React.Component {
  state={
    clicked: 0
  }

  updateClickCount() {
    this.setState({clicked: this.state.clicked + 1});
  }

  render() {
    return (
      <Container>
        <Router>
          <Blog
            buttonsClicked={this.state.clicked}
            path="/"
          />
          <Planets
            buttonsClicked={this.state.clicked}
            path="planets"
          />
        </Router>
        <Header>Footer</Header>
        <button 
          onClick={() => this.updateClickCount()}
        >
          Click me
        </button>
      </Container>
    )
  }
}

export default App;