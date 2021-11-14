import Button from "./Button.js"

const Search = ({ value, onSubmit, onChange, children }) => (
  <form onSubmit={onSubmit}>
    {children}
    <input type="text" value={value} onChange={onChange} />
    <Button type="submit">{children}</Button>
  </form>
)

export default Search
