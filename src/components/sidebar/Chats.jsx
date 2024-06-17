import Chat from "./Chat"
import useGetChats from "../../hooks/useGetChats";
import { getRandomEmoji } from "../../../utils/emoji";

export default function Chats(){
    const {loading, chats} = useGetChats();
    console.log("CONVERSATIONS", chats);

    return(
        <div className="py-2 flex flex-col overflow-scroll">
           {chats.map((chat, idx) => (
                <Chat key={chat._id} chat={chat} emoji={getRandomEmoji()} lastIdx={idx === chats.length - 1} />
           ))}
           
           {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    )
}