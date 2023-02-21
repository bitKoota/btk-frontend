import LogoSVG from "./../assets/svg/full_logo_blue.svg";

const linkedinLink = ""; 
const githubLink = "https://github.com/bitkoota";

export default function Footer(){
    let date = new Date(Date.now()); 
    date = date.getFullYear();
    
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl">
                <div className="mb-6 md:mb-0">
                    <a href="https://bitkoota.com" class="flex items-center">
                        <img src={LogoSVG} class="mr-3 h-8" alt="bitkoota logo"/>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href={linkedinLink} className="hover:underline">Linkedin</a>
                            </li>
                            <li>
                                <a href={githubLink} className="hover:underline">Github</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Politique de confidentialité</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Conditions d'utilisations</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {date} <a href="https://bitkoota.com" className="hover:underline">bitKoota</a></span>
            </div>
        </footer>
    )
}