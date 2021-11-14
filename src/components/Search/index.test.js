import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Search from "."

describe("Search", () => {
  let container = null
  it("renders component", () => {
    container = document.createElement("div")
    document.body.appendChild(container)
    render(<Search />, container)
    expect(container).toBeInTheDocument()
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<Search />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
