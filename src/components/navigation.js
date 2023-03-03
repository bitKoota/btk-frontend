import React from "react"; 
import Image from "./image";
import BTKLogo from "./../assets/svg/full_logo_blue.svg";
import { Navbar, Button } from "flowbite-react";


export default function Nav(){

    const onClickButtonConnect = (e) => {
        // Handle the button connect click
        e.preventDefault();
    }

    const onClickButtonRegister = (e) =>{
        e.preventDefault();
        // handle user connection here
    }

    return (
        <Navbar
            fluid={true} 
            rounded={true} 
        >
            <Navbar.Brand href="https://bitkoota.com/">
                {/* <img 
                    src={BTKLogo} 
                    className="mr-3 h-6 md:h-9"
                    alt="Bitkoota logo" 
                    width={121} 
                    height={40}
                /> */}
                <a href="https://bitkoota.com" class="flex items-center">
                        <img src={BTKLogo} class="mr-3 h-8" alt="bitkoota logo"/>
                </a>
            </Navbar.Brand>
            
            <div className="md-order-1">
                <p>La plateforme est en cours de construction, veuillez vous enregistrer à la file d'attente</p>
            </div>
            
            <div className="flex md:order-2">
                <Button
                    onClick={onClickButtonRegister}
                    className="text-white bg-blue-700 border border-transparent hover:bg-blue py-center p-0.5 text-center font-medium focus:z-10 rounded-lg">
                    S'enregistrer
                </Button>
                
            </div>
            
        </Navbar>
    )
    
}


