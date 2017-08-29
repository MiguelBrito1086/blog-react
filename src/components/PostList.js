import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "postlist": [],
    }
  }

  componentDidMount() {
    let url = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/'

    fetch(url)
      .then(results => results.json())
      .then((postlist) => {
        this.setState({ postlist })
      })
  }

  render() {
    const postlist = this.state.postlist.map(list => {
      return (
        <div className="col-sm-6" key={list._id}>
          <div className="card">
            <div className="card-block">
              <p className="card-title">
                <Link to={`/showpost/${list._id}`}>{list.title}</Link>
              </p>
              <p className="card-subtitle mb-2 text-muted">
                {list.blogPost}
              </p>
              <p className="card-action">
                {list.author}
              </p>
            </div>
          </div>
        </div>
    )
  })
  return (
    <div>
      {postlist}
    </div>
  )
}
}
