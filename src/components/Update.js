import React, { Component } from 'react'

const baseURL = 'http://localhost:3003/'

class Updates extends Component {
  state = {
    name: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.name);
    fetch(`${baseURL}holidays`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(responseJSON => console.log(responseJSON))
    .catch(err => console.log(err))
    this.setState({
      name: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          id='name'
          onChange={this.handleChange}
        />
        <input type='submit'/>
      </form>
    )
  }
}

export default Updates
