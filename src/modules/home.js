import React, {useState } from "react"; 
import Nav from "../../components/nav"; 
import Input from "@mui/material/Input"; 
import Button from "@mui/material/Button";
import WalletHome from "./../assets/img/wallet_home.png";
import ChartHome from "./../assets/img/char_home.png";
import ChartSVG from "./../assets/svg/chart_icon.svg";
import ShieldSVG from "./../assets/svg/shield_icon.svg";
import PhoneSVG from "./../assets/svg/phone_icon.svg";
import EyeSVG from "./../assets/svg/eye_icon.svg"; 
import CashStackSVG from "./../assets/svg/cash_stack_icon.svg";
import HandCashSVG from "./../assets/svg/hand_cash_icon.svg";
import AccountProfileSVG from "./../assets/svg/account_profile_icon.svg";
import GlobeSVG from "./../assets/svg/globe_icon.svg";
import BankSVG from "./../assets/svg/bank_icon.svg"; 

import { Divider } from "@mui/material";

export default function Home(){
    
    let [email, setEmail ] = useState("");

    const onStartButtonClick = (e) =>{
        e.preventDefault();
        console.log("Button start clicked");
    }
    
    return (
        <div id="container">
            <Nav/>
            <section id="home-section">
                <div id="home-subsection1">
                    <div id="text-subsection">
                        <p><a href="">Créez votre protefeuille maintenant</a><i class="fa-arrow-right"></i></p> 
                        <br/>
                        <h1>Achetez et vendez des crypto-monnaies</h1>
                        <br/> 
                        <br/> 
                        <p>Avec bitKoota échangez facilement et rapidement vos crypto-monnaies. Enregistrez vous à la file d'attente</p>
                    </div>
                    <div id="email-subsection">
                        {/* TODO: FILL THESE MATERIAL COMPONENTS*/}
                        <Input 
                            variant="text"
                            onTextChanged={setEmail}
                        />
                        <Button
                            className="primary" 
                            text="Commencer" 
                            onClick={onStartButtonClick}
                        />
                    </div>
                </div>
                <div id="home-subsection2">
                    <img id="wallet-home" src={WalletHome} alt="wallet_pic"/>
                </div>
            </section>

            <section id="section-1">
                <div id="subsection-1">
                    <h1>Creez votre protefeuille maintenant</h1> 
                    <p>Bitkoota possède un large eventail de fonctionalités qui vous permettent de trader en toute quiétude.</p>
                </div> 
                <div id="subsection-2">
                    <div id="manage-portfolio">
                        <div class="bullet-point">
                            <img src={ChartSVG} alt="chart"/>
                            <h3>Gerez votre portefeuil </h3>
                        </div>
                        <p>Achetez et vendez les crypto-monnaies les plus en vue
                            sur le marché et suivez l'évolution de leur prix.
                        </p>
                    </div>
                    <div id="optimal-security">
                        <div class="bullet-point">
                            <img src={ShieldSVG} alt="shield"/>
                            <h3>Sécurité Optimale</h3>
                        </div>
                        <p>Avec Bitkoota vos actifs sont protegés de la manière la plus sure. 
                            Nous respectons les standards de bonne pratique en la matière
                        </p>
                    </div>
                    <div id="mobile-app">
                        <div class="bullet-point">
                            <img src={PhoneSVG} alt="phone"/>
                            <h3>Application Mobile</h3>
                        </div>
                        <p>Vous pouvez acceder à la plateforme de trading grâce à nos applications Android et IOS</p>
                    </div>
                </div>
                <div id="subsection-3">
                    <img src={ChartHome} alt="chart"/>
                </div>
            </section> 
            <section id="section-2">
                <div id="subsection-1">
                    <h2>La plateforme de trading des cryptos la plus sûre</h2>
                    <p>Voici les aspects qui nous distinguent de la concurrence.</p>
                </div> 
                <div id="subsection-2">
                    <div class="column-list">
                        <div class="column-list-item">
                            <img src={EyeSVG} alt="eye"/>
                            <div class="column-list-detail">
                                <h3 class="column-list-title">Securité de vos transactions</h3> 
                                <p>Toutes vos transactions sur Bitkoota sont sécurisées de la manière la plus optimale</p>
                            </div>
                        </div>
                        <div class="column-list-item">
                            <img src={CashStackSVG} alt="cash_stack"/> 
                            <div class="column-list-detail">
                                <h3 class="column-list-title">Liquidité Abondantes</h3> 
                                <p>Bitkoota est la platforme la plus liquide du marché.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section id="section-4">
                <div class="banner">
                    <h2>La plateforme est en cours de construction</h2> 
                    <div class="timer-section">
                        <p>Nous reviendrons dans:</p> 
                        <div class="timer">
                            <h3>60 jours: 18h 24 min 30 secs</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-5">
                <div id="subsection-5-1">
                    <h3>Commencez à trader instantanément</h3>
                    <p>Bikoota regorde d'une variété de crypto monnaies les plus populaires</p>
                </div>
                <div id="subsection-5-2" class="column-list">
                    <div class="column-list-item">
                        <img src={AccountProfileSVG} alt="account_profile"/> 
                        <p>Créez votre compte</p>
                    </div>
                    <Divider/>
                    <div class="column-list-item">
                        <img src={BankSVG} alt="bank"/>
                        <p>Connectez votre compte bancaire ou mobile money</p>
                    </div>
                    <Divider/>
                    <div class="column-list-item">
                        <img src={HandCashSVG} alt="hand_cash_icon"/>
                        <p>Achetez et vendez des crypto-monnaies</p>
                    </div>
                </div>
            </section> 
            <section id="section-6">
                <div id="subsection-6-1">
                    <h1>Enregistrez vous à la file d'attente</h1>
                    <p>Le lancement de la plateforme interviendra bientôt, enregistrez 
                        vous à la file d'attente pour recevoir une mise à jour lorsque 
                        la pateforme sera lancée.
                    </p>
                </div>
                <div id="subsection-6-2">
                    <img src={GlobeSVG} alt="globe"/>
                </div>
            </section>
        </div>
    )
}