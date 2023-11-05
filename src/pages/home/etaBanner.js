const computeEta = () =>{
    let now = Date.now(); 
    let releaseDate = new Date('2023-12-25'); 
    let eta = computeRemaining(releaseDate) 
    return eta; 
    

}

const computeRemaining = (endDate) => {
    const totalMilliseconds = endDate - new Date(); 
    const totalSeconds = Math.floor(totalMilliseconds / 1000); 
    const totalMinutes = Math.floor(totalSeconds / 60); 
    const totalHours = Math.floor(totalMinutes / 60); 
    const days = Math.floor(totalHours / 24); 
    const hours = totalHours % 24; 
    const minutes = totalMinutes % 60; 
    return `${days} jours : ${hours} heures  : ${minutes} minutes`
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
                    {eta}
                </p>
            </div>
            
        </section>
    )
}