import { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import { v4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  const [filterOptions, setFilterOptions] = useState([
    {
      text: 'All Todos',
      selected: true,
    },
    {
      text: 'Completed',
      selected: false,
    },
    {
      text: 'Incomplete',
      selected: false,
    },
  ])

  const [selectedOption, setSelectedOption] = useState('')
  useEffect(() => {
    filterOptions.map((option) => {
      if (option.selected) setSelectedOption(option.text)
    })
  }, [filterOptions])

  function addTodo() {
    setTodos((prevState) => [
      ...prevState,
      {
        id: v4(),
        text: 'New Todo',
        isCompleted: false,
      },
    ])
  }

  function toggleComplete(id) {
    setTodos((prevState) =>
      prevState.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  function editTodo(id, text) {
    setTodos((prevState) =>
      prevState.map((todo) => {
        return todo.id === id ? { ...todo, text: text } : { ...todo }
      })
    )
  }

  function deleteTodo(id) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  function selectOption(text) {
    setFilterOptions((prev) =>
      prev.map((option) =>
        option.text === text
          ? { ...option, selected: true }
          : { ...option, selected: false }
      )
    )
  }

  return (
    <div className="flex flex-col items-center m-4 px-24">
      <Header
        addTodo={addTodo}
        filterOptions={filterOptions}
        selectOption={selectOption}
      />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        selectedOption={selectedOption}
      />
    </div>
  )
}

export default App
