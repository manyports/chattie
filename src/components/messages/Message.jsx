import { useAuthContext } from "../../context/AuthContext";
import { getTimeFromDate } from "../../../utils/getTimeFromDate";
import useChat from "../../zustand/useChat";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedChat } = useChat();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = getTimeFromDate(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;
