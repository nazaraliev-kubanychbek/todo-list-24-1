import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import './style.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [status, setStatus] = useState('all');

  useEffect(()=>{
   switch( status){
    case 'all':{
      setList(data.filter((item)=>{
        return !item.deleted
      }))
      break
    }
    case 'completed':{
      setList(data.filter((item)=>{
        return  item.completed &&  !item.deleted
      }))
      break
    }
    case 'important':{
      setList(data.filter((item)=>{
        return !item.deleted && item.important
      }))
      break
    }
    case 'trash':{
      setList(data.filter((item)=>{
        return item.deleted
      }))
      break
    }
    default:{
      setList(data.filter((item)=>{
        return !item.deleted && !item.completed
      }))
    }
   }
  }, [data, status])
  return (
    <div >
      <Header />
      <TodoForm data={data} setData={setData} />
      <TodoList list={list} data={data} setData={setData} setStatus={setStatus} status={status}/>
    </div>
  );
}

export default App;
