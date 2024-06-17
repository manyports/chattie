import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
	const { setauthUser } = useAuthContext();
	
    const signup = async ({ email, username, password }) => {
        const success = handleInputErrors({ email, username, password });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, username, password }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
		
			localStorage.setItem("chat-user", JSON.stringify(data));
			setauthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ email, username, password }) {
    if (!email || !username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true; 
}
