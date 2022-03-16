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
                    <img src="https://i.pinimg.com/564x/dc/b7/14/dcb71438dcac88b5ab2a2b7e410bd17f.jpg"/>
                    <img src="https://i.pinimg.com/564x/55/e4/b2/55e4b2c3646831d3cb653e5a270a62f9.jpg"/>
                    <img src="https://i.pinimg.com/564x/6f/b9/33/6fb93365cf6d512398535678cc693be0.jpg"/>
                </div>
                <h1 className="detail-tit">| Academic | FullStack Developer - Countries App</h1>
                <div className="cont-detail">
                   {
                       trans === 'EN' ?
                       <div>
                       <h3>- Proyecto individual de creación de una Sinlge Page Application para la creación de actividades turísticas y la posibilidad de adjudicarlos a diferentes países.</h3>
                       <p>Se desarrolló una Data Base usando la tecnología de PostgreSQL. Se trabajó con una API externa como fuente de información. Para crear la app se usó: Lenguaje JavaScript, NodeJS, Express, Sequelize, React-Redux y CSS puro.</p>
                       <h3>Algunas funcionalidades:</h3>
                       <p>-Posibilidad de visualizar los países en orden alfabético y por cantidad de población.</p> 
                       <p>-Posibilidad de visualizar los países por continente y por actividad turística.</p>
                       <p>-Posibilidad de buscar un país mediante una barra de búsqueda.</p>
                       <p>-Posibilidad de crear una actividad con su dificultad, duración y temporada, y asignarla a uno o más países.</p>
                       <p>-Posibilidad de visualizar los datos específicos de cada país y sus actividades asignadas.</p>
                       <h3>El proyecto tuvo una duración de 3 semanas.</h3>
                       </div>
                       :
                       <div>
                        <h3>- Individual project to create a Sinlge Page Application for the creation of tourist activities and the possibility of awarding them to different countries.</h3>
                       <p>The Database was developed using PostgreSQL technology. An external API was used as a source of information. To create the app, we used: JavaScript language, NodeJS, Express, Sequelize, React-Redux and pure CSS.</p>
                       <h3>Some funcionalities:</h3>
                       <p>-Possibility of viewing the countries in alphabetical order and by population.</p> 
                       <p>-Possibility of visualizing the countries by continent and by tourist activity.</p>
                       <p>-Ability to search for a country using a search bar.</p>
                       <p>-Possibility to create an activity with a value of difficulty, duration and season, and assign it to one or more countries.</p>
                       <p>-Possibility of visualizing the specific data of each country and its assigned activities.</p>
                       <h3>The project lasted 3 weeks.</h3>
                       </div>
                   } 
                    <div className="botonera-d">
                        <div>
                            <Link href='https://pi-countries-henry.vercel.app/'>
                            <button>Visitar</button>
                            </Link>
                            <Link href='https://github.com/lautar007/PI-countries'>
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