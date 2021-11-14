import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Button from "."

describe("Button", () => {
  let container = null
  it("renders component", () => {
    container = document.createElement("div")
    document.body.appendChild(container)
    render(<Button />, container)
    expect(container).toBeInTheDocument()
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<Button />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
