
const features = [
    {
        name: 'Securité de vos données', 
        description: 'Toutes vos transactions sur bitKoota sont securisées',
        icon: "fa fa-eye fa-4x text-blue-500"
    },
    {
        name: 'Liquidités abondantes', 
        description: "bitKoota est la plateforme d'echange la plus liquide du marché", 
        icon: "fa fa-money fa-4x text-blue-500"
    },
    {
        name: "Variété de crypto actifs", 
        description: "bitKoota vous permet de trader une large gamme de crypto actifs", 
        icon: "fa fa-bitcoin fa-4x text-blue-500"
    }
]

export default function FeatureSectionText(){
    return (
        <div className="py-12 bg-white">
            <div className="py-12 bg-white">
                <div className="mx-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">La plateforme de trading crypto la plus sûre</h2>
                    <dl className="spacy-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                        {features.map((feature) =>(
                            <div key={feature.name}>
                                <dt>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}