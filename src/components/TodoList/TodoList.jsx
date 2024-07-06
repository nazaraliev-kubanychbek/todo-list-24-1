import TodoItem from "../TodoItem/TodoItem";
import './todoList.css';

const TodoList = ({list}) => {
    return (
        <div className="todo-list">
            {
                list.map( item =>{
                    return <TodoItem item={item} />
                })
            }
        </div>
    );
}

export default TodoList;
