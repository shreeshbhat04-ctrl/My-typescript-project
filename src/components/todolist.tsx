import React from "react"
import Todoitem from "./TodoItem"
import type { Todo } from "../type/tod";
interface Todolist{
todos: Todo[];
oncomplete:(id:number,completed:boolean)=>void;
ondelete:(id:number)=>void;
}
export default function Todolist({todos,oncomplete,ondelete}:Todolist) {
    const todosorted=todos.sort((a,b)=>{
        if(a.completed === b.completed){
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    })
    return(
        <>
        <div className="space-y-2">
                  {todosorted.map(todo=>(
                    <React.Fragment key={todo.id}>
                      <Todoitem
                      key={todo.id} 
                      todo={todo}
                      oncomplete={oncomplete}
                      ondelete={ondelete}
                      />
                      <p className="border-2 border-gray-300 rounded-md p-4 mb-4">
                        {todo.title}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
                {todos.length === 0 && (
                    <p className="text-center text-sm text-gray-500">No todos available. Add a new todo!</p>
                )}
                </>
        
    )
}