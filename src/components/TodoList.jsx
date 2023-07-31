/* eslint-disable react/prop-types */
import TodoItem from './TodoItem'

const TodoList = ({
  todos,
  toggleComplete,
  editTodo,
  deleteTodo,
  selectedOption,
}) => {
  return (
    <div className="w-11/12 h-96 mt-10 py-4 px-10 bg-gray-700 rounded-2xl text-white">
      <h3 className="text-purple-600 font-bold text-2xl">{selectedOption}</h3>
      <div className="mt-4 max-h-80 overflow-y-auto">
        {todos.map((todo) => {
          let willRender
          if (selectedOption === 'All Todos') {
            willRender = true
          } else if (selectedOption === 'Completed' && todo.isCompleted) {
            willRender = true
          } else if (selectedOption === 'Incomplete' && !todo.isCompleted) {
            willRender = true
          } else {
            willRender = false
          }

          return (
            willRender && (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                isCompleted={todo.isCompleted}
                toggleComplete={toggleComplete}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            )
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
