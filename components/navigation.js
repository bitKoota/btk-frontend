import React from "react"; 
import Image from "next/image";
import Button from "@mui/material/Button";


export default function Nav(){

    const onLickButtonConnect = (e) =>{
        // Handle the button connect click
        e.preventDefault();
    }

    const onClickButtonRegister = (e) =>{
        e.preventDefault();
        // handle user connection here
    }


    return (
        <div>
            <div id="brand_logo">
                <Image 
                    src="/logo.png"
                    alt="bitkoota logo" 
                    width={120} 
                    height={21}
                />
            </div>
            <div id="nav-list">
                <div>
                    <p>La Plateforme est en cours de construction, enregistrez vous à la file d'attente</p>
                </div>
                <div id="nav-buttons">
                    
                    <Button 
                        id="btn-register" 
                        onClick={onClickButtonRegister}
                        variant="text" 
                        color="primary"
                    > S'enregistrer</Button> 
                    <Button 
                        id="btn-connect" 
                        onClick={onClickButtonConnect} 
                        variant="text"
                        disabled={true}
                    >Se Connecter</Button>
                </div>
            </div>
        </div>
    )
}