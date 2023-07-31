/* eslint-disable react/prop-types */
const Option = ({ option, selectOption }) => {
  return (
    <div
      className="flex items-center my-2"
      onClick={(e) => {
        e.stopPropagation()
        selectOption(option.text)
      }}
    >
      <input
        type="radio"
        name="filter-options"
        id={option.text}
        defaultChecked={option.selected}
      />
      <label htmlFor={option.text} className="ml-3">
        {option.text}
      </label>
    </div>
  )
}

export default Option
