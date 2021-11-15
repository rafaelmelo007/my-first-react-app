import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Search from "."

describe("Search", () => {
  const onSubmit = () => {}
  const onChange = (event) => {}

  it("renders without crashing", () => {
    const { queryByText } = render(
      <Search onSubmit={onSubmit} onChange={onChange}>
        Search
      </Search>
    )

    const button = queryByText("Search")
    expect(button.textContent).toEqual("Search")
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(
      <Search onSubmit={onSubmit} onChange={onChange}>
        Search
      </Search>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
