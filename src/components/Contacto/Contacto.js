import               './Contacto.scss'
import Whatsapp from '../../assets/img/Contactos/whatsapp.png'
import Gmail    from '../../assets/img/Contactos/gmail.png'


const Contacto = () => {

    return(
        <div className="contactos-container">

            <section>
                
                <div>

                    <div className="contactos-titulo-container">
                        <h3>CONTACTAME</h3>
                    </div>

                    <hr/>

                    <div className="contactos-lista-container">

                        <div>
                            <a href="mailto:camilamorlivo01@gmail.com">
                                <img width="20px" height="20px" src={Gmail}/>
                                Email camilamorlivo01@gmail.com
                            </a>
                        </div>

                        <div>
                            <a href="https://wa.me/1554133460">
                                <img width="20px" height="20px" src={Whatsapp}/>
                                Whatsapp +54 9 11 5413-3460
                            </a>
                        </div>
                    </div>

                    <div className="contactos-herramientas-container">
                        <h5>ESTE SITIO ESTÁ DESARROLLADO CON:</h5>
                        <div>
                            <div className="HTML">
                                <p>HTML</p>
                            </div>
                            <div className="SASS">
                                <p>SASS</p>
                            </div>
                            <div className="JS">
                                <p>JS</p>
                            </div>
                            <div className="REACT">
                                <p>REACT</p>
                            </div> 
                            <div className="BOOTSTRAP">
                                <p>BOOTSTRAP</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contacto