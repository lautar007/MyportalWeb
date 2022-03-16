import React from "react";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Development(){

    return(
        <div>
            <NavBar/>
            <h1 className="development">This proyect its in development yet. Please, come back in a few weeks.</h1>
            <h1 className="development">Este proyecto está en desarrollo aún. Por favor, vuelve en un par de semanas.</h1>
            <Link href='/'>
            <button className="back">Home</button>
            </Link>
        </div>
    )
}