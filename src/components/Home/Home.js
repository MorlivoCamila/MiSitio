import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe                        from "../AboutMe/AboutMe";
import Portafolio                     from '../Portafolio/Portafolio';
import Header                         from "../Header/Header";
import Educacion                      from '../Educacion/Educacion';
import Skills                         from '../Skills/Skills';  
import Contacto                       from '../Contacto/Contacto';
import                                     './Home.scss'

const Home = () => {

    return (
        <div className="home-container">
            <BrowserRouter>

                <div className="header-container">
                    <Header/>
                </div>

                <div className="section-container">
                    <Routes>
                        <Route path="/"                  element={<AboutMe/>}/>
                        <Route path="/sobreMi"           element={<AboutMe/>}/>
                        <Route path="/perfilProfesional" element={<Portafolio/>}/>
                        <Route path="/educacion"         element={<Educacion/>}/>
                        <Route path="/skills"            element={<Skills/>}/>
                        <Route path="/contacto"          element={<Contacto/>}/>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
        
    )
}

export default Home
