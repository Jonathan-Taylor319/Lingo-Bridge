import React, { useContext } from "react"
import UserTokenContext from "../contexts/TokenContext"

export default function ProfilePage() {
    //useContext - react method
    // { we call what we want to see or modify } useContext(<madecontext>)
    const { token, isAuthenticated } = useContext(UserTokenContext)
    return (
        <>
        <h1>testing</h1>
            {isAuthenticated ? (
                <p>Token: { token } </p>
            ) : (
                <p>you are not signed in.</p>
            )}
        
        </>
    )
}