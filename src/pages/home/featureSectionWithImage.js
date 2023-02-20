import DashboardImage from "../../assets/img/chart_home.webp";


export default function FeatureListWithImage(){
    return (
        <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-16">
            <div className="mx-auto max-w-md text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                <div>
                    <p className="mt-2 text-3xl font-extrabold text-black tracking-light sm:text-4xl">
                        Créez votre portefeuil crypto maintenant
                    </p>
                    <p className="mt-5 mx-w-prose mx-auto text-xl text-gray-500">
                        Achetez et vendez les crypto-monnaies les plus en vue sur le marché et suivez l'évolution de leur prix.
                    </p>
                </div>
                <div className="mt-12  sm:-mb-24">
                    <img 
                        className="rounded-lg shadow-xl ring-black ring-opacity-5" 
                        src={DashboardImage} alt="dashboard"
                        width={1200}
                    />
                </div>
                <div className="mt-48">
                    <section className="mb-32 text-gray-800 text-center">
                        <div className="grid md:grid-cols-3 lg:gap-x-12">
                            <div className="mb-12 md:mb-0">
                                <div class="p-4 bg-blue-500 rounded-lg inline-block mb-6">
                                    <i className="fa fa-line-chart fa-lg text-white"></i>
                                </div>
                                <h5 className="text-lg font-bold mb-4">Gérez votre portefeuil</h5>
                                <p className="text-gray-500">
                                    Achetez et vendez les crypto monnaies les plus en vue sur le marché et suivez l'evolution de 
                                    leur prix.
                                </p>
                            </div>

                            <div className="mb-12 md:mb-0">
                                <div className="p-4 bg-blue-500 rounded-lg shadow-lg inline-block mb-6">
                                    <i className="w-5 h-5 fa fa-shield fa-lg text-white"></i>
                                </div>
                                <h5 className="text-lg font-bold mb-4">Securité Optimale</h5>
                                <p className="text-gray-500">
                                    Avec bitKoota vos actifs sont protegés de la manière la plus sure. Nous respectons les standards
                                    de securité appliqués dans toute l'industrie des crypto-monnaies.
                                </p>
                            </div>

                            <div className="mb-12 md:mb-0">
                                <div className="p-4 bg-blue-500 rounded-lg shadow-lg inline-block mb-6">
                                    <i className="w-5 h-4 text-white fa fa-mobile fa-2x"></i>
                                </div>
                                <h5 className="text-lg font-bold mb-4">Application Mobile</h5>
                                <p className="text-gray-500">
                                    Vous pouvez acceder à la plateforme de trading grace à nos applications Android et IOS.
                                </p>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}