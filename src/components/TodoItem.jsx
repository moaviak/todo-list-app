/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { FaPenToSquare, FaTrashCan, FaCircleCheck } from 'react-icons/fa6'

const TodoItem = ({
  id,
  text,
  isCompleted,
  toggleComplete,
  editTodo,
  deleteTodo,
}) => {
  const [editing, setEditing] = useState(false)
  const [todo, setTodo] = useState(text)
  const inputElement = useRef()

  useEffect(() => {
    if (editing) {
      inputElement.current.focus()
    } else {
      editTodo(id, todo)
    }
  }, [editing])

  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className="border w-5 h-5 text-gray-500 bg-black border-gray-300 rounded focus-within:ring-0"
        checked={isCompleted}
        onChange={() => toggleComplete(id)}
      />
      <div className="ml-4 flex justify-between items-center w-full">
        <input
          ref={inputElement}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          disabled={!editing}
          className={`bg-transparent p-0 border-none focus:border-transparent focus:ring-0 ${
            isCompleted ? 'text-gray-500' : ''
          }`}
        />
        <div>
          {editing ? (
            <button onClick={() => setEditing(false)}>
              <FaCircleCheck />
            </button>
          ) : (
            <button onClick={() => setEditing(true)}>
              <FaPenToSquare />
            </button>
          )}
          <button className="mx-2" onClick={() => deleteTodo(id)}>
            <FaTrashCan />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
