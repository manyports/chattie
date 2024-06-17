import Chats from "./Chats"
import LogOut from "./LogOut"
import SearchInput from "./SearchInput"

export default function Sidebar(){
    return(
       <div className="px-[2vw]">
        <div className="flex flex-col">
            <SearchInput />
            <Chats />
            <LogOut />
        </div>
        </div>
    )
}