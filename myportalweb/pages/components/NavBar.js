import React from "react";
import Link from 'next/link';

export default function NavBar(){
     return (
         <div className="cont-NB">
             <div className="titulos">
             <Link href='/'>
             <h1>Lautaro Nuñez.</h1>
             </Link>
             <h2>| FullStack Developer |</h2>
             </div>
             <Link href='https://lautaro-nunez-portfolio-9lcbc9hwe-lautar007.vercel.app/resume'>
             <button>Resume/CV</button>
             </Link>
         </div>
     )
}