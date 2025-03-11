import React, { createContext, useEffect, useState } from "react"

const UserInfoContext = createContext()

export const UserInfoProvider = ({ children }) => {
    const [userName, setUsername] = useState("")
    //don't think i need but maybe in future use?
    const [userEmail, setuserEmail] = useState ("")

    const setUserName = (newName) => {
        setUsername(newName)
        sessionStorage.setItem("userName", newName)
    }

    const setUserEmail = (newEmail) => {
        setuserEmail(newEmail)
        sessionStorage.setItem("userEmail", newEmail)
    }

    useEffect(() => {
        const savedName = sessionStorage.getItem("username")
        if (savedName) {
            setUsername(savedName)
        }

        const savedEmail = sessionStorage.getItem("userEmail")
        if (savedEmail) {
            setuserEmail(savedEmail)
        }

    }, [])

    return (
        <UserInfoContext.Provider value={{ userName, userEmail, setUserName, setUserEmail }}>
            { children }
        </UserInfoContext.Provider>
    )

}

export { UserInfoContext }


