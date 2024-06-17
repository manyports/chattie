import { useSocketContext } from "../../context/SocketContext";
import useChat from "../../zustand/useChat";

export default function Chat({ chat, lastIdx, emoji }) {
    const { selectedChat, setSelectedChat } = useChat();
    const isSelected = selectedChat?._id === chat._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(chat._id);

    return(
        <div className={`flex gap-2 hover:bg-slate-800 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-slate-900" : "" } `} onClick={() => setSelectedChat(chat)}>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <div className="font-bold text-lg flex">{isOnline ? <p>🟢</p> : <p>🔴</p>} {chat.username} </div>
                    <div className="text-sm text-slate-400">{emoji}</div>
                </div>
            </div>
        </div>
    )
}