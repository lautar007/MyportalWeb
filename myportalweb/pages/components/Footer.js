import React from "react";
import Link from "next/link";

export default function Footer (){

    return(
        <div className="cont-footer">
            <div>
                <h1 className="contact">Contact | Contacto</h1>
                <div>
                    <div className="cont-contact">
                        <img className="logo" src="https://i.pinimg.com/564x/2f/7f/90/2f7f90949b9a9cd2cc221adb39d39b7d.jpg"/>
                        <h3>@lautar0_07</h3>
                    </div>
                    <div className="cont-contact">
                        <img className="logo" src="https://i.pinimg.com/564x/05/fe/ff/05feffdcf71f9c7171faa8fec852c256.jpg"/>
                        <h3>kautarol@gmail.com</h3>
                    </div>
                </div>
            </div>
            <div className="logosdev">
                <Link href='https://github.com/lautar007'>
                <img className="logo1" src="https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"/>
                </Link>
                <Link href='https://www.linkedin.com/in/lautaro-nu%C3%B1ez-117a3b18b/'>
                <img className="logo1" src='https://i.pinimg.com/564x/2b/e7/ce/2be7cee4fe404b8fa86d31d139fab757.jpg'/>
                </Link>
            </div>
        </div>
    )
}