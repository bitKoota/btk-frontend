import WalletHome from "../../assets/img/Wallet_home.png"; 
import Layout from "../../components/layout";

const onStartButtonClick = (e) =>{
    // This button brings the user the user 
    // to the registration form
    console.log("BUtton start clicked!");
};

export default function HeroSection(){
    return (
        
            <section className="grid justify-items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <p className="text-blue-700 pl-2">Créez votre portefeuil maintenant <i className="fa fa-arrow-right text-blue-500" aria-hidden="true"></i></p>
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Achetez et vendez des crypto-monnaies</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">Avec bitkoota echangez facilement et rapidement vos crypto-monnaies. Enregistrez vous à la file d'attente</p>
                    <div className="flex">
                        <input className="items-center justify-center px-5 py-3 mr-3 text-base font-medium border border-blue-700 rounded-lg focus:ring-blue-500 block w-full p-2.4 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Addresse Email"/>
                        <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" href="" onClick={onStartButtonClick}>
                            Commencer 
                            <i className="fa fa-arrow-right w-5 ml-2 -mr-1"></i>
                        </a>
                    </div>
                    
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={WalletHome} alt="wallet_home"/>
                </div>
            </section>        
        
    )
}
