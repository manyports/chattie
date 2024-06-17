import { useEffect } from "react";
import useChat from "../../zustand/useChat";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedChat, setSelectedChat } = useChat();

	useEffect(() => {
		return () => setSelectedChat(null);
	}, [setSelectedChat]);

	return (
		<div className='md:min-w-[450px] flex flex-col max-h-screen'>
			{!selectedChat ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-slate-500 px-4 py-2 mb-2 overflow-auto'>
						<span className='label-text'>Speaking to:</span>{" "}
						<span className='font-bold'>{selectedChat.username}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome,  {authUser.username} 👋 </p>
				<p>Dive into the world of texting</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
