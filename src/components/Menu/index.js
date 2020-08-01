import React from 'react';
import Logo from '../../assets/images/LogoOmega.png';
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';
import  { Link } from 'react-router-dom';

function Menu(){

    return (
        <header className="Menu">
          
            <Link to="/">
                <img className="Logo" src={Logo} alt="Omega Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>


        </header>
    

    );


}

export default Menu;