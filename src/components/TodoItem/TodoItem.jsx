import './todoItem.css';

const TodoItem = ({item}) => {
    return (
        <div className="todo-item">
            <div className="todo-item-left">
                <input type="checkbox" />
                <p className="todo-item-text">
                    {item.text}
                </p>
            </div>

            <div className="todo-item-right">
                <button>correct</button>
                <button>important</button>
                <button>delete</button>
            </div>

        </div>
    );
}

export default TodoItem;
