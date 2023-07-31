/* eslint-disable react/prop-types */
import Option from './Option'

const Filter = ({ options, selectOption }) => {
  return (
    <div className="absolute bg-gray-700 mt-2 ml-4 px-4 py-2 shadow-2xl outline outline-1 outline-gray-500 flex flex-col w-36">
      {options.map((option, idx) => (
        <Option key={idx} option={option} selectOption={selectOption} />
      ))}
    </div>
  )
}

export default Filter
