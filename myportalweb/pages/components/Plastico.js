import React from "react";
import Link from "next/link";
import NavBar from "./NavBar";
import { useState } from "react";

export default function Countries (){

    const [trans, setTrans] = useState('EN')

    function handleTrans(e){
        e.preventDefault();
        if(trans === 'EN'){
            setTrans('ES');
        }
        else if(trans === 'ES'){
            setTrans('EN');
        }
    }

    return(
        <div>
            <NavBar/>
            <div>
                <div className="galeria">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D2DAQEjFAsyamTG0A/profile-treasury-image-shrink_800_800/0/1646359359372?e=1647518400&v=beta&t=qbX2CwhkZo3Ihigx32BpH81fJD5KQ81rdwo3wd9rh3Y"/>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D2DAQHPrL8qFyKMkA/profile-treasury-image-shrink_800_800/0/1646359573402?e=1647518400&v=beta&t=apGRHrnAVHKpwdY7KWVnbkMKInMK2LWpPUchGq_VtaM"/>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D2DAQFmHTSzIn5Ggg/profile-treasury-image-shrink_800_800/0/1646359394044?e=1647518400&v=beta&t=uBAp5aP-11wGuuWuOBJCTwuDkqNMhlMnew9i24htpz0"/>
                </div>
                <h1 className="detail-tit">| Professional | FullStack Developer - Portfolio Web.</h1>
                <div className="cont-detail">
                   {
                       trans === 'EN' ?
                       <div>
                       <h3>- Proyecto individual para la creación de un portfolio web para Plástico Estudio, estudio fotográfico localizado en Córdoba Capital. </h3>
                       <p>Se realizó un portal web en el que, además de poder promocionar sus producciones fotográficas tanto artísticas como comerciales, también se implementó:</p>
                       <p>-Un blog de noticias, para presentar las últimas novedades en cuanto al estudio. </p> 
                       <p>-La posibilidad de subscribirse a un newsletter por medio de correo electrónico. </p>
                       <p>-La posibilidad de registrarse como pasante para trabajar y/o colaborar en las producciones del estudio.</p>
                       <p>- Una lista de tareas exclusiva para los administradores en las que organizar quehaceres pendientes.</p>
                       <h3>Este portal web se diseño con las siguientes tecnologías: </h3>
                       <p>- JavaScript - React - Redux - PostgreSQL - Sequelize - Express.js - Estilos con CSS puro. </p>
                       <h3>El proyecto tuvo una duración de 1 mes.</h3>
                       </div>
                       :
                       <div>
                       <h3>- Individual proyect about the creation of a web portfolio for Plástico Estudio, a photographic studio located in Córdoba Capital. </h3>
                       <p>A web portal was made in which, in addition to being able to promote their artistic and commercial photographic productions, the following was also implemented:</p>
                       <p>- A news blog, to present the latest on the studio. </p> 
                       <p>- The possibility of subscribing to a newsletter by email. </p>
                       <p>- The possibility of registering as an intern to work and/or collaborate in the studio's productions.</p>
                       <p>- An exclusive task list for administrators to organize pending tasks.</p>
                       <h3>This web portal was designed with the following technologies:</h3>
                       <p>- JavaScript - React - Redux - PostgreSQL - Sequelize - Express.js - Styles with pure CSS. </p>
                       <h3>The project lasted 1 month.</h3>
                       </div>
                   } 
                    <div className="botonera-d">
                        <div>
                            <Link href='/components/inDevelopment'>
                            <button>Visitar</button>
                            </Link>
                            <Link href='https://github.com/lautar007/plastico_web'>
                            <button>Repositorio</button>
                            </Link>
                        </div>
                        <button onClick={(e)=>handleTrans(e)}>{trans}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}