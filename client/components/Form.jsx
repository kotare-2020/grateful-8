import React from "react"
import { Link } from "react-router-dom"

class MyForm extends React.Component {
  state = {
    question: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log("submit", this.state)

    this.props.setQuestion(this.state.question)
  }

  handleChange = (event) => {
    const name = event.target.name
    const question = event.target.value

    console.log("change!", event.target.question)

    this.setState({
      [name]: question,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Question:
          <input type="text" name="question" onChange={this.handleChange} />
        </label>

        <Link to={`/Fate`}><button >Decide my Fate</button></Link>
        
      </form>
    )
  }
}

export default MyForm
