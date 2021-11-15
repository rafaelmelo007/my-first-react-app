import { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

class Loader extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    )
  }
}
export default Loader
