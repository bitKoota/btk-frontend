function Divider(){
    return (
        <div className="h-0 w-24 border border-black self-center"></div>
    )
}

export default function StepsSection(){
    return (
        <div className="w-full h-52 self-center">
            <h1 className="text-2xl text-center font-medium mt-10">Commencez à trader instantanément</h1>
            <p className="text-center text-gray-600 font-normal">bitKoota regorge d'une large gamme de crypto-actifs à trader.</p>
            <div className="flex justify-center text-center mt-16">
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
    )
}