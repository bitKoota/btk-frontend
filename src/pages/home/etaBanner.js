const computeEta = () =>{
    let now = Date.now(); 
    let releaseDate = new Date('2023-04-1'); 
    let eta = releaseDate - now; 
    eta = Date.parse(eta);
    return eta;
    

}

export default function ETABanner(){
    let eta = computeEta();
    
    return (
        <div className="bg-blue-500 w-full h-48">
            <div className="">
                <h3 className="text-white text-center m-5 mt-10 text-4xl">
                    La plateforme de trading est en cours de construction
                </h3>
                <p className="text-white text-center m-5 text-2xl">Nous reviendrons dans: </p>
                <p className="text-white text-center m-5 text-4xl">
                    Le 1er Avril 2023 à 0h00
                </p>
            </div>
            
        </div>
    )
}