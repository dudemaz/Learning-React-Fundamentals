import AddTuskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTuskForm"
import TodoList from "./TodoList"
import TodoInfo from "./TodoUnfo"

function Todo(){

    const tasks = [
        {id: 1, title: 'Task 1', isDone: false},
        {id: 2, title: 'Task 2', isDone: true},
    ]

    function deleteAllTasks(){
console.log('All tasks have been deleted')
    }

    function deleteTask(id){
console.log(`Task with id ${id} has been deleted`)
    }

    function toggleTask(id, isDone){
        console.log(`Task with id ${id} is now ${isDone ? 'done' : 'not done'}`)
    }

    const filterTasks = (query) => {
        console.log(`Filtering tasks with query: ${query}`)
    }

    const addTask = () =>{
        console.log(`задача Добавлена!`)
    }
    return(
            <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTuskForm addTask={addTask}/>
      <SearchTaskForm onSearchInput={filterTasks}/>
     <TodoInfo
     total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}
        onDeleteAll={deleteAllTasks}
     />
     <TodoList tasks={tasks}
      onDeleteTask={deleteTask}
      onToggleTask={toggleTask}
     />
    </div>
    )
}
export default Todo