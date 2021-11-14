import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import App from "."

describe("App", () => {
  let container = null
  it("renders component", () => {
    container = document.createElement("div")
    document.body.appendChild(container)
    render(<App />, container)
    expect(container).toBeInTheDocument()
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
