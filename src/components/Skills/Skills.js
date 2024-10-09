import './Skills.scss'

const Skills = () => {

    return(

        <div className='skills-container'>

            <section>
                                
                <div>
                    
                    <div className="skills-titulo-container">
                        <h3>SKILLS</h3>
                    </div>

                    <hr/>
                    
                    <div className="skills-info-container">
                        
                        <div>
                            <h4>LENGUAJES DE PROGRAMACIÓN:</h4>
                            <div>
                                <div className="HTML">
                                    <p>HTML</p>
                                </div>
                                <div className="CSS">
                                    <p>CSS</p>
                                </div>
                                <div className="JS">
                                    <p>JS</p>
                                </div>
                            </div>
                        </div>

                        <div>

                            <h4>FRAMEWORKS Y LIBRERÍAS:</h4>     
                            <div>
                                <div className="REACT">
                                    <p>REACT</p>
                                </div>    
                                <div className="BOOTSTRAP">
                                    <p>BOOTSTRAP</p>
                                </div>  
                            </div>     

                        </div>

                        <div>

                            <h4>PREPROCESADORES:</h4>     
                            <div>
                                <div className="SASS">
                                    <p>SASS</p>
                                </div>  
                            </div>     

                        </div>

                        <div className='skills-lista-container'>
                            <h4>ESTOY APRENDIENDO EN:</h4>
                            <div>
                                <ul>
                                    <li>
                                        <p>Programación Backend II: Diseño y Arquitectura Backend</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                
                </div>

            </section>

        </div>
    )


}

export default Skills