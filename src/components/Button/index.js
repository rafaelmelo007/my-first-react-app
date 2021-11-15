import { Component } from "react"
import { PropTypes } from "prop-types"
import Loader from "../Loader"

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
  isLoading: PropTypes.bool.isRequired
}

export const ButtonWithLoader = withLoader(Button)

// --------------------------------------- //

export const SortButton = ({ sortKey, onSort, children }) =>
    <Button onClick={() => onSort(sortKey)}>
    {children}
    </Button>

SortButton.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}
