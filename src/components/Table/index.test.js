import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Table from "."

Enzyme.configure({ adapter: new Adapter() })

describe("Table", () => {
  const props = {
    list: [
      {
        title: "title_abc",
        author: "1",
        num_comments: 1,
        points: 2,
        objectID: "y",
      },
      {
        title: "title_def",
        author: "2",
        num_comments: 1,
        points: 2,
        objectID: "z",
      },
    ],
  }

  const onDismiss = (objectID) => {}

  it("renders without crashing", () => {
    const { queryByText } = render(<Table onDismiss={onDismiss} {...props} />)

    const div = queryByText("title_abc")
    expect(div.textContent).toEqual("title_abc")
  })

  test("has a valid snapshot", () => {
    const component = renderer.create(<Table onDismiss={onDismiss} {...props} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("shows two items in list", () => {
    const element = shallow(<Table onDismiss={onDismiss} {...props} />)
    expect(element.find(".table-row").length).toBe(2)
  })
})
