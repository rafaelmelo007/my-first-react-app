import { render, screen } from "@testing-library/react"
import Table from "."

test("renders learn react link", () => {
  render(<Table />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
