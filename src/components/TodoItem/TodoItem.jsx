import './todoItem.css';

const TodoItem = ({item, setKey}) => {
    return (
        <div className="todo-item">
            <div className="todo-item-left">
                <input type="checkbox"
                onChange={()=>{
                    setKey('completed', item.id)
                }}
                checked={item.completed}
                />
                <p className="todo-item-text">
                    {item.text}
                </p>
            </div>

            <div className="todo-item-right">
                <button>correct</button>
                <button
                className={
                    item.important
                    ? 'important'
                    : ''
                }
                onClick={()=>{
                    setKey('important', item.id)
                }}>important</button>
                <button
                onClick={()=>{
                    setKey('deleted', item.id)
                }}
                >delete</button>
            </div>

        </div>
    );
}

export default TodoItem;
