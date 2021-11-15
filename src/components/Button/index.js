import { Component } from "react"
import { PropTypes } from "prop-types"
import Loader from "../Loader"
import classNames from "classnames"

import "./index.css"

class Button extends Component {
  render() {
    const { onClick, className, children } = this.props
    return (
      <button onClick={onClick} className={className} type="button">
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  className: "",
}

export default Button

// --------------------------------------- //

const withLoader =
  (Component) =>
  ({ isLoading, ...rest }) =>
    isLoading ? <Loader /> : <Component {...rest} />

withLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export const ButtonWithLoader = withLoader(Button)

// --------------------------------------- //

export class SortButton extends Component {
  render() {
    const { sortKey, onSort, className, children, activeSortKey } = this.props
    const sortClass = classNames(className, {
      "button-active": sortKey === activeSortKey,
    })
    return (
      <Button onClick={() => onSort(sortKey)} className={sortClass}>
        {children}
      </Button>
    )
  }
}

SortButton.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  activeSortKey: PropTypes.string.isRequired,
  className: PropTypes.string,
}

SortButton.defaultProps = {
  className: "button-inline",
}
