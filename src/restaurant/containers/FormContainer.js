import React from "react"
import Form from "../components/Form"
import axios from "axios"

const token =
  "mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx"

const style = {
  maxWidth: "1000px",
  margin: "0 auto"
}

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "restaurant",
      category: "coffee",
      location: "vancouver",
      sort: "rating",
      openAt: new Date().toISOString()
    }
    this.handleChange = this.handleChange.bind(this)
  }
  submit = e => {
    e.preventDefault()
    this.fetchFunction()
  }

  async fetchFunction() {
    const { search, category, location, sort, openAt } = this.state
    const url = `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&categories=${category}&sort_by=${sort}`

    console.log(url)
    try {
      const fetchFunc = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      const result = await fetchFunc
      console.log(result)
      this.setState({
        restaurant: result.data.businesses
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target["name"]]: e.target["value"]
    })
    console.log(e.target["value"])
  }

  render() {
    return (
      <div style={style}>
        <Form submit={this.submit} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default FormContainer
