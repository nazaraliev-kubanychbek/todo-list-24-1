import "./form.css";
import { useState } from "react";

const TodoForm = ({data, setData, status, setStatus}) => {
    const [text, setText] = useState('');
  return (
    <div className="todo-form">
      <input type="text" placeholder="Enter todo"
      value={text}
      onChange={e =>{
        setText(e.target.value)
      }}
      disabled={status === 'trash'}
      />
     {
      status !== 'trash'
      ?  <button
      onClick={()=>{
          setData([
              {
                  completed: false,
                  important: false,
                  deleted: false,
                  correct: false,
                  id: data.length > 0
                  ? data[0].id + 1
                  : 1,
                  text,
              },
              ...data
          ]);
          setText('');
          setStatus('all');
      }}
        >add</button>
        : ''
     }
    </div>
  );
};

export default TodoForm;
