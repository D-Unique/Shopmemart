import ServerError from "../components/ErrorConponent/ServerError";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function  BackendLogout() {
    const url = "http://localhost:3000/api/v1/user/logout";
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        if (response.ok) {
            localStorage.removeItem("token");
            const data = await response.json();
            toast.success(data.message, { position: 'bottom-center' });
            

          
        } else {
            toast.error("Error logging out, try again", { position: 'bottom-center' });
        }
    }
    catch (error) {
        console.error("Error:", error);
        return <ServerError />;  
    }
}

export default BackendLogout
