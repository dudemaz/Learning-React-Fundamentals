import AddTuskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTuskForm"
import TodoList from "./TodoList"
import TodoInfo from "./TodoUnfo"

function Todo(){
    return(
            <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTuskForm/>
      <SearchTaskForm/>
     <TodoInfo/>
     <TodoList/>
    </div>
    )
}
export default Todo