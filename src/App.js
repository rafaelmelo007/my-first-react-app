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
      results: null,
      searchKey: "",
      searchTerm: DEFAULT_QUERY,
      error: null,
    }
  }

  componentDidMount = () => {
    const { searchTerm } = this.state
    this.setState({ searchKey: searchTerm })
    this.fetchSearchTopStories(searchTerm)
  }

  onSearchChange = (ev) => {
    this.setState({ searchTerm: ev.target.value })
  }

  onSearchSubmit = (event) => {
    const { searchTerm } = this.state
    this.setState({ searchKey: searchTerm })
    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm)
    }
    event.preventDefault()
  }

  onDismiss = (id) => {
    const { searchKey, results } = this.state
    const { hits, page } = results[searchKey]
    const isNotId = (item) => item.objectID !== id
    const updatedHits = hits.filter(isNotId)

    this.setState({
      results: {
        ...this.state.results,
        [searchKey]: { hits: updatedHits, page },
      },
    })
  }

  render() {
    const { searchTerm, searchKey, results, error } = this.state

    const page = (results && results[searchKey] && results[searchKey].page) || 0

    const list =
      (results && results[searchKey] && results[searchKey].hits) || []

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
          {error?.message ? (
            <div className="interactions" style={{ color: "red" }}>
              {error.message}
            </div>
          ) : (
            <Table list={list} onDismiss={this.onDismiss} />
          )}
        </div>
        <div className="interactions">
          <Button
            onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
          >
            More
          </Button>
        </div>
      </div>
    )
  }

  setSearchTopStories = (result) => {
    const { hits, page } = result
    const { searchKey, results } = this.state

    const oldHits = results && results[searchKey] ? results[searchKey].hits : []

    const updatedHits = [...oldHits, ...hits]
    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page },
      },
    })
  }

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm]
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    const { searchKey, results } = this.state
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then((response) => response.json())
      .then((result) => this.setSearchTopStories(result))
      .catch((error) => {
        debugger
        this.setState({ error })
      })
  }
}

export default App
