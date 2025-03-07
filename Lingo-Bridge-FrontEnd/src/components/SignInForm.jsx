export default function SignInForm({ handleInputChange, formData, handleSubmit, responseMsg }) {

    return (
        <>
        {responseMsg && <h2>{responseMsg</h2>}
        <div className="signInForm">
            <form onSubmit= {handleSubmit} >
                <fieldset>
                <label htmlFor="username">Choose a Username:</label>
                <input 
                type="text"
                id="username"
                name="username"
                value={ formData.username }
                onChange={ handleInputChange }
                required
                />
                <label htmlFor="password">Choose a safe Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={ formData.password }
                onChange={ handleInputChange }
                required
                />
                </fieldset>
                <button type="submit" style={{display:"block", width:"125%", marginLeft:"auto"}}>Sign Up!</button>
            </form>
        </div>
        </>
    )
}