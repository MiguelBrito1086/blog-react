import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return(
      <div>
        <nav>
          <NavLink exact to='/'>PollyBlog</NavLink>
          <NavLink to='/createpost'>Create Post</NavLink>
          <NavLink to='/showposts'>Show All Posts</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
