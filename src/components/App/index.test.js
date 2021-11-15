import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import App from "."

describe("App", () => {
  it("renders without crashing", () => {
    const { queryByText } = render(<App />)

    const button = queryByText("Search")
    expect(button.textContent).toEqual("Search")
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
