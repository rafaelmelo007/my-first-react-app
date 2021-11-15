import axios from "axios"
import { Component } from "react"
import "./index.css"
import Search from "../Search"
import Table from "../Table"
import { ButtonWithLoader } from "../Button"

import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from "../../constants"

class App extends Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      results: null,
      searchKey: "",
      sortKey: "NONE",
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
    }
  }

  componentDidMount = () => {
    this._isMounted = true
    const { searchTerm } = this.state
    this.setState({ searchKey: searchTerm })
    this.fetchSearchTopStories(searchTerm)
  }

  componentWillUnmount = () => {
    this._isMounted = false
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

  onSort = (sortKey) => {
    this.setState({ sortKey })
  }

  render() {
    const { searchTerm, searchKey, results, error, isLoading, sortKey } =
      this.state

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
            <Table
              list={list}
              onDismiss={this.onDismiss}
              sortKey={sortKey}
              onSort={this.onSort}
            />
          )}
        </div>
        <div className="interactions">
          <ButtonWithLoader
            isLoading={isLoading}
            onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
          >
            Load More
          </ButtonWithLoader>
        </div>
      </div>
    )
  }

  // # Helper methods #

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
      isLoading: false,
    })
  }

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm]
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    this.setState({ isLoading: true })
    axios(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(
        (result) => this._isMounted && this.setSearchTopStories(result.data)
      )
      .catch((error) => this._isMounted && this.setState({ error }))
  }
}

export default App
