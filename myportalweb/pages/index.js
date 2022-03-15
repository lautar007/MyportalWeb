import React from "react";
import NavBar from "./components/NavBar";
import Typed from 'typed.js';
import Link from 'next/link';
import { useState} from "react";


export default function Land() {

  const [about, setAbout] = useState(false); 
  const [proyect, setProyect] = useState(false);
  const [trans, setTrans] = useState('ES');

  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: ['BackEnd Developer',
        'FrontEnd Developer',
        '<strong>Let´s Create</strong>.',
      ],
      typeSpeed: 100,
      backSpeed: 50,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  function handleAbout (e){
    e.preventDefault();
    if(proyect === true){
      setProyect(false)
    }
    setAbout(!about);
    console.log(about)
  }

  function handleProyect (e){
    e.preventDefault();
    if(about === true){
      setAbout(false)
    }
    setProyect(!proyect);
    console.log(proyect)
  }

  function handleTrans (e){
    e.preventDefault();
    if(trans === 'ES'){
      setTrans('EN');
    }
    else if(trans === 'EN'){
      setTrans('ES');
    }
  }

  return (
    <div>
      <NavBar/>
     <div className="botonera">
       <button onClick={(e)=> handleAbout(e)}>About me. <br/> Sobre mí.</button>
       <button onClick={(e)=> handleProyect(e)}>Proyects. <br/> Proyectos.</button>
     </div>
     <div className="cuadro-tec">
         <div className="contenido">
            <span className="crear" style={{ whiteSpace: 'pre' }} ref={el} />
         </div>
         <div className="tech">
           <h2>Technologies. <br/> Tecnologías.</h2>
           <div className="grid">
             <img src="https://i.pinimg.com/564x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg"/>
             <img src="https://i.pinimg.com/564x/1d/66/01/1d66013f5f896dd5e206885495fb564c.jpg"/>
             <img src="https://i.pinimg.com/564x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg"/>
             <img src="https://i.pinimg.com/564x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg"/>
             <img src="https://i.pinimg.com/564x/da/1c/1b/da1c1ba16e52114d1a59e9ad666a4ae6.jpg"/>
             <img src="https://logodix.com/logo/2074247.png"/>
             <img src="https://i.pinimg.com/564x/06/86/c0/0686c0c85407548ea5bd737a572974b6.jpg"/>
             <img src="https://miro.medium.com/max/1200/1*xsMYIt3m_cleoHcd-Ncozg.png"/>
           </div>
         </div>
     </div>
     {
      about === true ?
      <div className="cont-target">
        <div className="title-target">
          <h1>About me | Sobre mi</h1>
          <button onClick={(e)=> handleTrans(e)}>{trans}</button>
        </div> 
        <div className="presentacion">
          <img className='retrato' src="https://i.pinimg.com/564x/47/a6/8b/47a68b9482e80fe26a93fda1ca4c3f4c.jpg"/>
          {
            trans === 'ES' ?
            <p>I was born in Corrientes Capital, Argentina. I studied film and television at the National University of Córdoba.<br/>
            I graduated as an Audiovisual Producer Technician in 2019.<br/>
            In 2020 I dedicated myself to making animations and studying cocktails, getting to work as a bartender in the first half of 2021<br/>
            With the intention of giving new meaning to my work, I entered a coding bootcamp and learned some technologies that allowed me to explore new ideas and challenges.<br/>
            I have a good knowledge of English. I communicate in an understandable way and I practice my vocabulary by translating books into Spanish.<br/>
            I am passionate about cinema and music. I like animation for adults and I am excited to do jobs in these fields, even if they are not so profitable.<br/>
            Finally, I am also a writer. I have two books written and many stories scattered. Some have won awards. I always try to give myself some time to continue with my writings and if you read this, surely I am in some new story.</p>
            :
            <p>Nací en Corrientes Capital, Argentina. Estudié la carrera de cine y televisión en la Universidad Nacional de Córdoba. <br/>
            Me gradué de Técnico productor audiovisual en el 2019.<br/>
            En el 2020 me dediqué ha hacer animaciones y estudiar coctelería, llegando a trabajar como bartender la primera mitad del 2021.<br/>
            Con la intención de darle un nuevo sentido a mi trabajo, ingresé en un bootcamp de programación y aprendí algunas tecnologías que me permitieron explorar nuevas ideas y desafíos.<br/>
            Tengo un buen conocimiento de inglés. Me se comunicar de manera entendible y practico mi vocabulario traduciendo libros al castellano.<br/>
            Me apasiona el cine y la música. Me gustan la animación para adultos y me entusiasma realizar trabajos en estos campos, aunque no sean tan rentables.<br/>
            Por último, También soy escritor. Tengo dos libros escritos y muchos cuentos desperdigados. Algunos han ganado premios. Siempre intento darme un tiempo para continuar con mis escrituras y si lees esto, seguramente estoy en algún nuevo relato.</p>
          }
        </div> 
      </div>
      :
      null
     }
     {
       proyect === true ?
       <div className="cont-target">
         <h1>Proyects | Proyectos</h1>
          <div className="pro-target">
          <Link href='https://pi-countries-henry.vercel.app/'>
            <img src="https://i.pinimg.com/564x/dc/b7/14/dcb71438dcac88b5ab2a2b7e410bd17f.jpg"/>
          </Link> 
            <div>
          <Link href='https://pi-countries-henry.vercel.app/'>
            <h2>| Academic | FullStack Developer - Countries App</h2>
          </Link>
            <p>- Proyecto individual de creación de una Sinlge Page Application para la creación de actividades turísticas y la posibilidad de adjudicarlos a diferentes países.</p>
          </div>
        </div> 

        <div className="pro-target">
         <Link href='https://eventy-main.vercel.app/'>
          <img src="https://i.pinimg.com/564x/cc/63/d3/cc63d3aea1eccf6a83908cf6db799ae3.jpg"/>
          </Link> 
          <div>
          <Link href='https://eventy-main.vercel.app/'>
          <h2>| Academic | Fullstack developer - Eventy</h2>
          </Link>
          <p>- Group project to create a social network for the creation and promotion of social and sporting events and the possibility of finding nearby events.</p>
        </div>
        </div>

        <div className="pro-target">
         <Link href='https://github.com/lautar007/plastico_web'>
          <img src="https://i.pinimg.com/564x/31/dc/d5/31dcd58d545da0469cf8003c7f250984.jpg"/>
          </Link> 
          <div>
          <Link href='https://github.com/lautar007/plastico_web/'>
          <h2>| Professional | FullStack Developer - Portfolio Web. </h2>
          </Link>
          <p>- Creación de un portfolio web para Plástico Estudio, estudio fotográfico localizado en Córdoba Capital. 
          Se realizó un portal web en el que, además de poder promocionar sus producciones fotográficas tanto artísticas como comerciales.</p>
        </div>
        </div>

       </div>
       :
       null
     }
    </div>
  )
}
