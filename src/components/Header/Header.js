import                 './Header.scss'
import                 'bootstrap/dist/css/bootstrap.min.css'
import icono from      "../../assets/img/Emojis/hi.png"
import { Link }   from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <header className="row header">             
                <nav>

                    <div>
                        <img width="200px" height="180px" src={icono}/> 

                        <label className='header-checkbtn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="list_icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </label>

                        <input type='checkbox' name='' className='header-checkbox'></input>

                        <div className='header-list-container'>
                            <div className='header-list-item-container'>
                                <Link to='sobreMi'>SOBRE MÍ</Link>
                            </div>
                            <div className='header-list-item-container'>
                                <Link to='perfilProfesional'>PROYECTOS PERSONALES</Link>
                            </div>
                            <div className='header-list-item-container'>
                                <Link to='educacion'>EDUCACIÓN</Link>
                            </div>
                            <div className='header-list-item-container'>
                                <Link to='skills'>SKILLS</Link>
                            </div>
                            <div className='header-list-item-container'>
                                <Link to='contacto'>CONTACTO</Link>
                            </div>
                        </div>
                            

                    </div>
                </nav> 

            </header>
        </div>
    )
}

export default Header