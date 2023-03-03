function Divider(){
    return (
        <div className="h-0 w-24 border border-black self-center"></div>
    )
}

export default function StepsSection(){
    return (
        <section className="relative bg-white mb-16 md:mb-24 lg:mb-24 sm:mb-52">
            <div className="mx-auto mx-w-md text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                <div className="w-full h-52 self-center">
                    <h1 className="text-2xl text-center font-medium mt-10">Commencez à trader instantanément</h1>
                    <p className="text-center text-gray-600 font-normal">bitKoota regorge d'une large gamme de crypto-actifs à trader.</p>
                    <div className="grid md:grid-cols-5 lg:gap-x-12 justify-center text-center mt-16">
                        <div className="">
                            <i className="fa fa-user text-blue-500 fa-4x"></i>
                            <p className="font-medium pt-5">Créez votre compte</p>
                        </div>
                        <Divider/> 
                        <div className="">
                            <i className="fa fa-bank text-blue-500 fa-4x"></i>
                            <p className="font-medium pt-5">Connectez votre carte bancaire ou compte mobile money</p>
                        </div>
                        <Divider/>
                        <div className="">
                            <i className="fa fa-money text-blue-500 fa-4x"></i>
                            <p className="font-medium pt-5">Achetez et vendez vos crypto-monnaies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}