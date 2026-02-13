import { useEffect, useState } from "react";
import type { Todo } from "../type/tod";
import { dummydata } from "../data/todos";

export default function useTodos(){
      const [todos, setTodos]=useState(()=>{
        const savedtools:Todo[]=JSON.parse(localStorage.getItem("todos") || "[]");
        return savedtools.length > 0 ? savedtools : dummydata;
      })
      useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
      },[todos])
    function setcomplete(id:number,completed:boolean){
      //alert(`Todo with id ${id} is now ${completed ? "completed" : "incomplete"}`);
      setTodos((prevTodos)=>
       prevTodos.map(todo=>(
        todo.id===id?{...todo,completed}:todo
       ))
      )
    }
    function deleteallcompleted(){
      setTodos(prevTodos=>prevTodos.filter(todo=>!todo.completed))
    }
    function deleteTodo(id: number) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
    function addTodo(title:string){
      setTodos((prevTodos)=>[{
        id: Date.now(),
        title,
        completed:false,
    
      },
      ...prevTodos,
    ])
    }
    return {todos,setTodos,setcomplete,deleteallcompleted,deleteTodo,addTodo};
}