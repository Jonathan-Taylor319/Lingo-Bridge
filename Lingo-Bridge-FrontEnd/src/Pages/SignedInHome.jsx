import React, {useState} from "react"
import FancyButtons from "../components/FancyButtons"


export default function LoggedInHome() {
    //need a state to know what is being clicked?
    const [choice, setChoice] = useState(null)
    
   //need a handleclick ---- will choose what to render depending on what is picked......
    const handleclick = (content) => {
        setChoice(content)
    }
    return (
        <>
        <h2>What's your Jam?</h2>
        <div>
            {/* need to add something to listen for click and set the state */}
            < FancyButtons onButtonClick= {handleclick} />

            <div className="userActivity">
                {choice === "Search" && < WordSearchingPage />}
                {choice === "Quiz" && <p>placeholderforQUIZ</p>}
                {choice === "Home" && setChoice(null)}
                {choice === "Profile" && < ProfilePage />}
            </div>
         
        
        
        </div>
        </>
            

    )
}