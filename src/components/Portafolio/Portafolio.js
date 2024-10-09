import                      './Portafolio.scss'
import BlogChet        from "../../assets/img/ProyectoPorfolio/BlogChet.png"
import Ecommerce       from "../../assets/img/ProyectoPorfolio/Ecommerce.png"
import ProductsBackend from "../../assets/img/ProyectoPorfolio/ProductsBackend.png"

const Portafolio = () => {

    return(
        <div className='portafolio-container'>
            <section>

                <div>

                    <div className="perfilProfesional-titulo-container">
                        <h3>PROYECTOS PERSONALES</h3>
                    </div>

                    <hr/>
                    
                    <div className="perfilProfesional-proyectos-container">
                        <article>
                            <a href="https://github.com/MorlivoCamila/Blog-25290">
                                <img width="285px" height="150px" src={BlogChet}/>
                                <h4>BLOGCHET</h4>
                                <p>Parte front end de un blog sobre crochet. Este proyecto fue presentado como proyecto final del curso Desarrollo Web en Coderhouse</p>
                                <h5>HTML/CSS/BOOTSTRAP</h5>
                            </a>
                        </article>

                        <article>
                            <a href="https://github.com/MorlivoCamila/Ecommerce-ReactJs-25290">
                                <img width="285px" height="160px" src={Ecommerce}/>
                                <h4>ECOMMERCE</h4>
                                <p>Simulación de un Ecommerce para presentar como proyecto final en el curso React JS en Coderhouse.</p>
                                <h5>HTML/CSS/JAVASCRIPT/BOOTSTRAP</h5>
                            </a>
                        </article>
                        
                        <article>
                            <a href="https://github.com/MorlivoCamila/ProductsInRealTime-Backend-70125">
                                <img width="285px" height="150px" src={ProductsBackend}/>
                                <h4>PRODUCTOS EN TIEMPO REAL</h4>
                                <p>Proyecto de vistas y base de datos presentado en el curso Programación Backend I: Desarrollo Avanzado de Backend de Coderhouse.</p>
                                <h5>HTML/CSS/JAVASCRIPT/MONGO DB/BOOTSTRAP/HANDLEBARS</h5>
                            </a>
                        </article>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portafolio