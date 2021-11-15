import { Component } from "react"
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

const withLoader =
  (Component) =>
  ({ isLoading, ...rest }) =>
    isLoading ? <Loader /> : <Component {...rest} />

Button.defaultProps = {
  className: "",
}

export const ButtonWithLoader = withLoader(Button)

export default Button
