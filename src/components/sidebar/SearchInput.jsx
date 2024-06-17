import { BiSearchAlt } from "react-icons/bi"
import useGetChats from "../../hooks/useGetChats";
import useChat from "../../zustand/useChat";
import toast from "react-hot-toast";
import { useState } from "react";

export default function SearchInput() {
    const [search, setSearch] = useState('')
    const {setSelectedChat} = useChat();
    const {chats} = useGetChats();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3){
            toast.error("the user youre looking for cant be found");
        } 
        const chat = chats.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));
        
        if(chat){
            setSelectedChat(chat);
        } else {
            toast.error("the user youre looking for cant be found");
        }
    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" className="input input-bordered rounded-full" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type='submit' className="btn btn-circle text-white bg-slate-500">
                <BiSearchAlt />
            </button>
        </form>
    )
}