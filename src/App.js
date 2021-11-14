import { Component } from "react"
import "./App.css"
import Search from "./Search.js"
import Table from "./Table.js"
import Button from "./Button.js"

const DEFAULT_QUERY = "redux"
const DEFAULT_HPP = "5"

const PATH_BASE = "https://hn.algolia.com/api/v1"
const PATH_SEARCH = "/search"
const PARAM_SEARCH = "query="
const PARAM_PAGE = "page="
const PARAM_HPP = "hitsPerPage="

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: {
        hints: [],
      },
      searchTerm: DEFAULT_QUERY,
    }
  }

  componentDidMount = () => {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  onSearchChange = (ev) => {
    this.setState({ searchTerm: ev.target.value })
  }

  onSearchSubmit = () => {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  onDismiss = (id) => {
    const isNotId = (item) => item.objectID !== id
    const updatedHits = this.state.result.hits.filter(isNotId)
    this.setState({
      result: { ...this.state.result, hits: updatedHits },
    })
  }

  render() {
    const { searchTerm, result } = this.state
    const page = (result && result.page) || 0
    if (!result) {
      return null
    }
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
          {result?.hits && (
            <Table list={result.hits} onDismiss={this.onDismiss} />
          )}
        </div>
        <div className="interactions">
          <Button
            onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
          >
            More
          </Button>
        </div>
      </div>
    )
  }

  setSearchTopStories = (result) => {
    const { hits, page } = result
    const oldHits = page !== 0 ? this.state.result.hits : []
    const updatedHits = [...oldHits, ...hits]
    this.setState({
      result: { hits: updatedHits, page },
    })
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((error) => error)
  }
}

export default App
