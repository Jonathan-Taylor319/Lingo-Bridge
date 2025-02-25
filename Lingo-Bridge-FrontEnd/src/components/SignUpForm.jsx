import React, {useState} from "react";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData); //change this to sending it to the back end
    };

    return (
        <div className="signUpForm">
            <form onSubmit= {handleSubmit} >
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }
                    required
                />
                </div>
                <div>
                    <label htmlFor="username">Choose a Username</label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={ formData.username }
                        onChange={ handleChange }
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Choose a safe Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={ formData.password }
                        onChange={ handleChange }
                        required
                    />
                </div>
                    <button type="submit" style={{display:"block", margin:"auto"}}>Sign Up!</button>
                </form>
        </div>
    )
}