import type { Todo } from "../type/tod";
interface todosummaryprops{
    todos: Todo[];
    deleteallcompleted:()=>void;
}
export default function Tododsummary({todos,deleteallcompleted}:todosummaryprops) { 
    const tot=todos.filter(todo=>todo.completed);
    return(
        <div className="text-center text-sm text-gray-500">
            <p className="text-sm font-medium">
                 {tot.length}/{todos.length} todos completed
            </p>
            {tot.length > 0 && (
                <button
                onClick={deleteallcompleted}
                className="text-red-500 hover:underline text-sm font-medium mt-2">
                    Delete all completed
                </button>
            )}
            </div>
    )

}