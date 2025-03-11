import React, { createContext, useEffect, useState } from "react"

const UserInfoContext = createContext()

export const UserInfoProvider = ({ children }) => {
    const [username, setUsername] = useState("")
    //don't think i need but maybe in future use?
    const [userEmail, setuserEmail] = useState ("")

    const setName = (newName) => {
        setUsername(newName)
        sessionStorage.setItem("username", newName)
    }

    const setEmail = (newEmail) => {
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
        <UserInfoContext.Provider value={{ username, userEmail, setName, setEmail }}>
            { children }
        </UserInfoContext.Provider>
    )

}

export { UserInfoContext }


