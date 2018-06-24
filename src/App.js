import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import { Navbar, Footer } from './components/Index'
import { Home, Blog, About } from './pages/Index'

class App extends Component {
  render() {

    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column'
      },
      navbar: {
        flex: 1
      },
      main: {
        flex: 4,
        flexWrap: 'wrap'
      },
      footer: {
        flex: 1,
        justifyContent: 'right'
      }
    }

    return (
      <div style={styles.container}>
        <Navbar style={styles.navbar} />
        <Container style={styles.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
          </Switch>
        </Container>
        <Footer isBlog={true} style={styles.footer} />
      </div>
    );
  }
}

export default App;
