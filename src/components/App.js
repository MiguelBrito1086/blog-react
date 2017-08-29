import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BaseLayout from './BaseLayout';
import ShowPost from './ShowPost';
import PostList from './PostList'
import CreatePost from './CreatePost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>HI!</div>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/showposts' component={PostList} />
              <Route path='/createpost' component={CreatePost} />
              <Route path='/showpost/:id' component={ShowPost} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
