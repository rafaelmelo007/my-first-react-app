import { Component } from "react"
import Button, { SortButton } from "../Button"
import PropTypes from "prop-types"

import "./index.css"

import { SORTS } from "../../constants"

const largeColumn = {
  width: "40%",
}
const midColumn = {
  width: "30%",
}
const smallColumn = {
  width: "10%",
}

class Table extends Component {
  render() {
    const { list, onDismiss, sortKey, onSort, isSortReverse } = this.props
    let sortedList = !isSortReverse
      ? SORTS[sortKey](list)
      : SORTS[sortKey](list).reverse()

    return (
      <div className="table">
        <div className="table-header">
          <span style={largeColumn}>
            <SortButton
              sortKey={"TITLE"}
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Title
            </SortButton>
          </span>
          <span style={midColumn}>
            <SortButton
              sortKey={"AUTHOR"}
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Author
            </SortButton>
          </span>
          <span style={smallColumn}>
            <SortButton
              sortKey={"COMMENTS"}
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Comments
            </SortButton>
          </span>
          <span style={smallColumn}>
            <SortButton
              sortKey={"POINTS"}
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Points
            </SortButton>
          </span>
          <span style={smallColumn}>Archive</span>
        </div>
        {sortedList.map((item) => (
          <div key={item.objectID} className="table-row">
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={midColumn}>{item.author}</span>
            <span style={smallColumn}>{item.num_comments}</span>
            <span style={smallColumn}>{item.points}</span>
            <span style={smallColumn}>
              <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
}

export default Table
