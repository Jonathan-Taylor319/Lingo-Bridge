import React, {useState} from "react";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData); //change this to sending it to the back end
    };

    return (
        <div className="signInForm">
            <form onSubmit= {handleSubmit} >
                <fieldset>
                    <div>
                        <label htmlFor="username"> Username: </label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={ formData.username }
                            onChange={ handleChange }
                            required
                        />
                    </div>
                        <label htmlFor="password"> Password: </label>
                         <input
                        type="password"
                        id="password"
                        name="password"
                        value={ formData.password }
                        onChange={ handleChange }
                        required
                        />
                </fieldset>
                <button type="submit" style={{display:"block", width:"125%", marginLeft:"auto"}}>Log In</button>
            </form>
        </div>
    )
}