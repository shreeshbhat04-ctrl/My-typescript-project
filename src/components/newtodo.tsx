import { useState } from "react"
interface NewtodoProps{
    onSubmit:(title:string)=> void;
}
export default function Newtodo({onSubmit}:NewtodoProps){
    const [input,setInput]=useState("")
    function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(!input.trim())return;
        onSubmit(input);
        setInput("");

    }
    return(
        <form className="flex" onSubmit={handlesubmit}>
            <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="rounded-s-md grow border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
            type="submit"
            className="w-16 rounded-e-md bg-slate-900 text-white hover:bgs-slate-800">
                Add
            </button>
        </form>
    )
}