import Button from "./Button.js"

const Search = ({ value, onSubmit, onChange, children }) => (
  <form>
    {children}
    <input type="text" value={value} onChange={onChange} />
    <Button onClick={onSubmit}>{children}</Button>
  </form>
)

export default Search
