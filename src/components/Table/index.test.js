import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Table from "."

describe("Table", () => {
  let container = null
  it("renders component", () => {
    container = document.createElement("div")
    document.body.appendChild(container)
    render(<Table />, container)
    expect(container).toBeInTheDocument()
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<Table />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
