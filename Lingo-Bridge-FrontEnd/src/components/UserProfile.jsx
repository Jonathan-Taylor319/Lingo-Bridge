import React from "react"
import { useUserProfile } from '../contexts/UserProfileContext'

export default function UserProfile({ }) {
    const { profile } = useUserProfile()

    if (!profile) {
        return <div>Loading profile....</div>
    }

    return (
        <>
            <h2>Check my drip.....this is your user profile!</h2>          
            <div>
                <h3>{ profile.username }</h3>
            </div>
        </>
    )
}