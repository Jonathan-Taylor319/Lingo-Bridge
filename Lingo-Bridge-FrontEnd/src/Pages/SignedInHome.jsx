import React from "react";
import { useNavigate } from "react-router-dom";
import FancyButtons from "../components/FancyButtons";
import RandomWord from "../components/RandomWord";
import GenZSlang from "../components/GenZslangSlang";


export default function SignedInHome(){

    return(
        <>
            <FancyButtons />
            < RandomWord />
            <GenZSlang />
        </>
    )
}