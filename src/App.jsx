import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {

  const [todo,setTodo] = useState([
    {
      id:1,
      title:'first todo'
  },
  {
    id:2,
    title:'second todo'
  },
  {
    id:3,
    title:'third todo'
  }
])

  return (
    <div className="App">

      <Header />

      <AddTodo todo = {todo} setTodo={setTodo} />      
          
      <TodoList todo = {todo} setTodo={setTodo} />
          
    </div>
  )
}

export default App
