/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { FaPlus, FaFilter } from 'react-icons/fa6'
import Filter from './Filter'

const Header = ({ addTodo, filterOptions, selectOption }) => {
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => {
      setShowOptions(false)
    })
  })

  return (
    <div className="text-white flex justify-between items-center w-full my-4 px-20">
      <h1 className="font-bold text-5xl">Todos</h1>
      <div className="flex">
        <button
          className="bg-gray-700 p-4 rounded-lg mx-3"
          onClick={() => addTodo()}
        >
          <FaPlus />
        </button>
        <div className="relative">
          <button
            className="bg-gray-700 p-4 rounded-lg mx-3"
            onClick={(e) => {
              e.stopPropagation()
              setShowOptions((prev) => !prev)
            }}
          >
            <FaFilter />
          </button>
          {showOptions && (
            <Filter options={filterOptions} selectOption={selectOption} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
