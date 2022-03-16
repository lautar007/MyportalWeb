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
                    <img src="https://i.pinimg.com/564x/cc/63/d3/cc63d3aea1eccf6a83908cf6db799ae3.jpg"/>
                    <img src="https://i.pinimg.com/564x/a5/a8/e9/a5a8e993394375206e26e1f994cac68e.jpg"/>
                    <img src="https://i.pinimg.com/564x/91/9a/b6/919ab60430aeecabb1c12a03084c97d3.jpg"/>
                </div>
                <h1 className="detail-tit">| Academic | FullStack Developer - Eventy</h1>
                <div className="cont-detail">
                   {
                       trans === 'EN' ?
                       <div>
                       <h3>- Proyecto grupal para el desarrollo de una red social en base a la creación y promoción de eventos sociales y deportivos, y la posibilidad de encontrar eventos cercanos.</h3>
                       <p>Se desarrolló la base de datos utilizando MongoDB. La plataforma de pagos de Mercado Pago fue implementada para manejar la compra y venta de entradas para los eventos. Se integró el sistema de mapeo de Google Maps para localizar tanto los eventos como al usuario en tiempo real. Se integró Disqus al detalle de cada evento para que los usuarios puedan comentarlos. También se creó un servidor de Discord para el encuentro de pesonas con intereses en común. Para crear la aplicación, se utilizaron las siguientes tecnologías: lenguaje JavaScript, NodeJS, Express, Sequelize, React-Redux y CSS puro.</p>
                       <h3>Algunas funcionalidades:</h3>
                       <p>-Categorización de eventos de acuerdo a su clase: fiesta, reunión, concierto; o deportes.</p> 
                       <p>-Posibilidad de localizar eventos en un mapa y encontrar eventos cercanos a mi ubicación actual.</p>
                       <p>-Posibilidad de crear eventos gratuitos o pagos para promocionarlos y vender entradas.</p>
                       <p>-Posibilidad de seguir a otros usuarios y obtener una notificación si se carga un nuevo evento.</p>
                       <p>-Posibilidad de visualizar los datos específicos de cada evento, su locación, fecha, imagenes y quién lo organiza.</p>
                       <h3>El proyecto tuvo una duración de 3 semanas.</h3>
                       </div>
                       :
                       <div>
                       <h3>- Group project to create a social network for the creation and promotion of social and sporting events and the possibility of finding nearby events.</h3>
                       <p>A Data Base was developed using MongoDB technology. The Mercado Pago payment gateway was implemented to handle the purchase and sale of tickets to events. The Google Maps mapping system was integrated to have the location of the events as well as the user in real time. Disqus was integrated into the detail of the events so that the user can comment on them. Also, a Discord server was created to find other people with common interests. To create the app, the following were used: JavaScript language, NodeJS, Express, Sequelize, React-Redux and pure CSS.</p>
                       <h3>Some funcionalities:</h3>
                       <p>-Categorization of events according to their class: party, meeting, concert; or for sports.</p> 
                       <p>-Possibility of locating events on a map and finding events near my current location.</p>
                       <p>-Possibility of creating free or paid events for promotion and ticket sales.</p>
                       <p>-Possibility to follow other users to get a notification if a new event uploads.</p>
                       <p>-Possibility of viewing the specific data of each event, its location, date, images and who is organizing it.</p>
                       <h3>The project lasted 3 weeks.</h3>
                       </div>
                   } 
                    <div className="botonera-d">
                        <div>
                            <Link href='https://eventy-main.vercel.app/'>
                            <button>Visitar</button>
                            </Link>
                            <Link href='https://github.com/gonreyna85code/Eventy---main'>
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