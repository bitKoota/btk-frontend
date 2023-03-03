const computeEta = () =>{
    let now = Date.now(); 
    let releaseDate = new Date('2023-04-1'); 
    let eta = releaseDate - now; 
    //eta = new Date(eta);
    return eta;
    

}

export default function ETABanner(){
    let eta = computeEta();
    
    return (
        <section className="flex flex-col bg-blue-500 w-full  mb-5">
            <div className="flex flex-col mt-16 mb-16">
                <h3 className="text-white text-center m-5 mt-5 text-4xl">
                    La plateforme de trading est en cours de construction
                </h3>
                <p className="text-white text-center m-5 text-2xl">Nous reviendrons dans: </p>
                <p className="text-white text-center m-5 text-4xl">
                    {eta} à 0h00
                </p>
            </div>
            
        </section>
    )
}