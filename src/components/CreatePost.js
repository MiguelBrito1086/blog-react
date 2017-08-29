import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props){
    super(props)
    this.state = {
      author: '',
      title: '',
      blogPost: '',
    }
  }

  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _submit = event => {
    event.preventDefault();
    let post = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
        method: "POST",
        body: post,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
      console.log(response, "yay");
      })
      .catch(err => {
      console.log(err, "boo!");
      });

      this.setState({
        author: '',
        title: '',
        blogPost: '',
      });
  }

  render() {
    return(
      <div>
        <form onSubmit={this._submit}>
          <h3>Author's Name</h3>
          <input type="text" placeholder='Enter your name or your email' name='author' value={this.state.author} onChange={this._change}/>
          <h3>Title</h3>
          <input type="text" placeholder='Title of your blog' onChange={this._change} name='title' value={this.state.title}/>
          <h3>Write your blog...</h3>
          <textarea id="" cols="40" rows="15" onChange={this._change} name='blogPost' value={this.state.blogPost} />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
