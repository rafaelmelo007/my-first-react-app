import { Component } from "react"

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
