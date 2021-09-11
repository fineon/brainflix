import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Main from './components/Main/Main';
import Upload from './components/Upload/Upload';


class App extends Component {

  render() {
    document.title = "BrainFlix"
    return (
      //An overall router that routes to the child components that correspond to the content and URL path specified
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route
              path="/video/:id"
              render={
                (props) => <Main {...props} />
              }
            />
            <Route path= "/upload" component={Upload} />
          </Switch>
        </Router>
        </div>
    );
  }

}

export default App;