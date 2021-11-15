import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Button, { SortButton } from "."

describe("Button", () => {
  it("renders without crashing", () => {
    const { queryByText } = render(<Button>OK!</Button>)

    const button = queryByText("OK!")
    expect(button.textContent).toEqual("OK!")
  })

  it("renders sort without crashing", () => {
    const { queryByText } = render(<SortButton>OK!</SortButton>)

    const button = queryByText("OK!")
    expect(button.textContent).toEqual("OK!")
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<Button />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
