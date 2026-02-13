
import Newtodo from "./components/newtodo"
import Todolist from "./components/todolist"
import Tododsummary from "./components/Tododsummary"
import useTodos from "./hooks/useTodos"

function App() {
  const{todos,addTodo,setcomplete,deleteallcompleted,deleteTodo}=useTodos();
return (
    <main className="py-8 bg-amber-50 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3x1 text-center">
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md shadow-md p-5 space y-6">
        <Newtodo
        onSubmit={addTodo}/>
        <Todolist
        todos={todos}
        oncomplete={setcomplete}
        ondelete={deleteTodo}
        />
        <Tododsummary
        todos={todos}
        deleteallcompleted={deleteallcompleted}
        />
      </div>
      
      </h1>
    </main>
  )
}

export default App
