import React from 'react';
import Logo from '../../assets/images/LogoOmega.png';
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';


function Menu(){

    return (
        <header className="Menu">
          
            <a href="/">
                <img className="Logo" src={Logo} alt="Omega Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>


        </header>
    

    );


}

export default Menu;