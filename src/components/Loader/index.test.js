import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Loader from "."

describe("Loader", () => {
  it("renders without crashing", () => {
    const { queryByText } = render(<Loader />)

    const div = queryByText("Loading...")
    expect(div.textContent).toEqual("Loading...")
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<Loader />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
