import TodoItem from "./TodoItem"
function TodoList(props){
    const {
        tasks = [],
        onDeleteTask,
        onToggleTask
    } = props
    const hasTasks = tasks.length > 0
    if(!hasTasks){
        return(
             <div className="todo__empty-message"></div>
        )
    }
    return(
         <ul className="todo__list">
          {tasks.map((task) => {
            return(
                <TodoItem 
                key={task.id}
                  {...task}
                  onDeleteTask={onDeleteTask}
                  onToggleTask={onToggleTask}
                />
            )
          })}
      </ul>
    )
}
export default TodoList