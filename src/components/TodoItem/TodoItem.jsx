import "./todoItem.css";

const TodoItem = ({ item, setKey, status, deleteTodo }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          disabled={status === "trash"}
          onChange={() => {
            setKey("completed", item.id);
          }}
          checked={item.completed}
        />
        <p className="todo-item-text">{item.text}</p>
      </div>

      <div className="todo-item-right">
        {status !== "trash" ? (
          <>
            <button onClick={()=>{
                setKey('correct', item.id)
            }}>correct</button>
            <button
              className={item.important ? "important" : ""}
              onClick={() => {
                setKey("important", item.id);
              }}
            >
              important
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              deleteTodo(item.id);
            }}
          >
            delete
          </button>
        )}

        <button
          onClick={() => {
            setKey("deleted", item.id);
          }}
        >
          {status === "trash" ? "restore" : "delete"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
