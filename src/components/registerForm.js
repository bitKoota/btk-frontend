import LogoBrand from "./../assets/svg/full_logo_blue.svg"

const onButtonRegisterClick = (e) =>{
    e.preventDefault();
    // Register credentials to firebase
    // Show gthe register successful modal 
    // Go back to the home page. 
    // if the user is already registered show 
    // modal saying email already registered
}

export default function RegisterForm(){
    return (
        <div className="flex flex-col">
            <div className="">
                <img src={LogoBrand} alt="bitkoota logo"/>
            </div>
            <form className="" action="#" method="POST">
                <div>
                    <input
                        type="text" 
                        name="firstName" 
                        required 
                        placeholder="Nom" 
                        className="" 
                    />
                    <input
                        type="text" 
                        name="firstName" 
                        required 
                        placeholder="Post-nom" 
                        className="" 
                    />    
                </div>
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="E-mail" 
                        className="" 
                    /> 
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        required 
                        placeholder="Tél: e.g +243823326720"
                        className="" 
                    />
                    <button 
                        id="registerButton"
                        text="S'enregistrer" 
                        onClick=""
                        className=""
                    />
                </div>
            </form>
        </div>
    );
}