import {useState} from "react"
import AddTuskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTuskForm"
import TodoList from "./TodoList"
import TodoInfo from "./TodoUnfo"

function Todo(){


    const [tasks, setTasks] = useState([
        {id: 1, title: 'Task 1', isDone: false},
        {id: 2, title: 'Task 2', isDone: true},
    ])

    const [newTaskTitle, setNewTaskTitle] = useState('')

    function deleteAllTasks(){
        const isConfirmed = confirm('Are you sure you want to delete all tasks?')
        if (isConfirmed){
            setTasks([])
        }
    }

    function deleteTask(id){
        setTasks(tasks.filter((task) => task.id !== id))
    }

    function toggleTask(id, isDone){
        setTasks(tasks.map((task) => {
            if(task.id === id){
                return {...task, isDone}
            }
            return task
        }))
    }

    const filterTasks = (query) => {
        console.log(`Filtering tasks with query: ${query}`)
    }

    const addTask = () =>{
        if (newTaskTitle.trim().length > 0){
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle.trim(),
                isDone: false
            }
            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }

    return(
            <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTuskForm addTask={addTask}
      newTaskTitle ={newTaskTitle}
      setNewTaskTitle={setNewTaskTitle}
      />
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