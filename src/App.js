import { Component } from "react"
import "./App.css"
import Search from "./Search.js"
import Table from "./Table.js"

class App extends Component {
  constructor() {
    super()

    const list = [
      {
        title: "React",
        url: "https://facebook.github.io/react/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: "Redux",
        url: "https://github.com/reactjs/redux",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ]
    this.state = { list, searchTerm: "" }
  }

  onDismiss = (id) => {
    const updatedList = this.state.list.filter((f) => f.objectID !== id)
    this.setState({ list: updatedList })
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { list, searchTerm } = this.state
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Pesquisa aqui!
            <br />
          </Search>
          <Table
            list={list}
            searchTerm={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
      </div>
    )
  }
}

export default App
