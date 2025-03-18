import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserTokenContext from "../contexts/TokenContext";
import { UserInfoContext } from "../contexts/UserInfoContext";
import FancyButtons from "../components/FunctionButtons";

export default function ProfilePage() {
    const navigate = useNavigate();
    const { token, clearUserToken } = useContext(UserTokenContext);
    const { setUserName, setUserEmail, userName, userEmail, avatarUrl } = useContext(UserInfoContext);
    
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            return;
        }
 
        setIsDeleting(true);
     
        navigate('/');

        try {
            const response = await fetch("http://3.149.23.222:8000/user/delete-user/", {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: userName }),
            });

            if (response.ok) {
                console.log("Account deleted successfully.");
                setUserName("");
                setUserEmail("");
                clearUserToken(); 
                sessionStorage.removeItem("userToken"); 
                alert("Your account has been deleted.");
            } else {
                console.log("Failed to delete account.");
            }
        } catch (error) {
            console.log("ERROR:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://3.149.23.222:8000/user/update-user/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify(formData),
            });
            const body = await response.json();
            if (body) {
                setUserName(body.username);
                setUserEmail(body.email);
            } else {
                console.log("No response body.");
            }
        } catch (error) {
            console.log("ERROR:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            const fetchUserData = async () => {
                try {
                    const response = await fetch("http://3.149.23.222:8000/user/get-user/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Token ${token}`,
                        },
                    });
                    const body = await response.json();
                    if (body) {
                        console.log(body);
                        setUserName(body.username);
                        setUserEmail(body.email);
                        setFormData({ username: body.username, email: body.email });
                    }
                } catch (error) {
                    console.error("Error in fetchUserData:", error);
                }
            };
            fetchUserData();
        } else {
            console.error("No token found.");
        }
    }, [token]);

    return (
        <>
        <div className="profilePageMain">
            <div className="profileInfo">
                <div className="currentProfileInfo">      
                {avatarUrl && <img src={avatarUrl} alt="User Avatar" style={{ width: "100px", borderRadius: "50%" }} />}
                <p>Username: {userName}</p>
                <p>Email: {userEmail}</p>
                </div>
            <form onSubmit={handleSubmit} className="signInForm">
                <label htmlFor="username"> <span style={{
                    color: "red",
                    textShadow: `
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px 1px 0 #000,
                    1px 1px 0 #000
                    `,
                }}
                >
                Warning! Changing your username will change avatar on next log in!!!!!!
                </span><br />
                Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                    />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    />         
                <button type="submit" className='infoFormButton' style={{ marginTop: "10px", alignSelf: "center" }}>
                    {isLoading ? "Updating User Info..." : "Update Info"}
                </button>
                <button 
                    type="button" 
                    className='deleteButton' 
                    onClick={handleDelete}
                    style={{ 
                        background: "linear-gradient(to bottom, #ff4d4d, red)", 
                        display: "block",
                        height: "100px",
                        width: "100px",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        alignSelf: "center",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)", 
                        transform: "translateY(10px)", 
                        fontWeight: "bold",
                        fontSize: "14px",
                        cursor: "pointer",
                    }}
                    >DELETE USER
                </button>
            </form>
            </div>
        </div>
    </>
    );
}
