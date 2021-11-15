import Button from "../Button"
import PropTypes from "prop-types"
import { Component } from "react"

class Search extends Component {
  constructor(props) {
    super(props)
    this.input = null
  }

  componentDidMount = () => {
    this.input?.focus()
  }

  render() {
    const { value, onSubmit, onChange, children } = this.props
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={(node) => {
            this.input = node
          }}
        />
        <Button type="submit">{children}</Button>
      </form>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Search
