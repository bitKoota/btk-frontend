
const features = [
    {
        name: 'Securité de vos données', 
        description: 'Toutes vos transactions sur bitKoota sont securisées',
        icon: "fa fa-eye fa-2x text-white"
    },
    {
        name: 'Liquidités abondantes', 
        description: "bitKoota est la plateforme d'echange la plus liquide du marché", 
        icon: "fa fa-money fa-2x text-white"
    },
    {
        name: "Variété de crypto actifs", 
        description: "bitKoota vous permet de trader une large gamme de crypto actifs", 
        icon: "fa fa-bitcoin fa-2x text-white"
    }
]

export default function FeatureSectionText(){
    return (
                <section className="mt-32 mb-32 text-gray-800 text-center">
                        <div className="grid md:grid-cols-3 lg:gap-x-12">
                            {features.map((feature) => (
                                <div className="mb-12 md:mb-0">
                                    <div class="p-4 bg-blue-500 rounded-lg inline-block mb-6">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h5 className="text-lg font-bold mb-4">{feature.name}</h5>
                                    <p className="text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                </section>
    )
}