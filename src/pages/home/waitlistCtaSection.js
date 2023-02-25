import { Button } from "flowbite-react";
import BackgroundImg from "./../../assets/img/background_footer.png";

export default function WaitList(){
    return (
        <div id="waitlist-banner" className="flex  bg-gray-100 w-full h-52  space-x-96">
            <div id="waitlist-text-cta" className="justify-start text-left w-1/3 block ml-5">
                <h1 className="text-black text-3xl mt-2">
                    Enregistrez vous à la file d'attente
                </h1>
                <p className="text-gray-500 text-normal mt-5">
                    Le lancement de la plateforme de trading interviendra bientôt, 
                    enregistez vous à la file d'attente pour recevoir toutes les mises à jour.
                </p>
                <Button className="mt-5">
                    S'enregistrer
                </Button>
            </div>
            <div id="waitlist-bg" className="justify-end">
                <img className="h-52 object-right" src={BackgroundImg} alt=""/>
            </div>
        </div>
    )
}