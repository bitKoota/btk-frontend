import React, {BrowserRouter, Route, Routes} from "react-router-dom"; 
import Home from "./pages/home/home";
import HeroSection from "./pages/home/heroSection";
import FeatureListWithImage from "./pages/home/featureSection1";

// The APP module handles routing

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hsection" element={<HeroSection/>}></Route>
                <Route path="/featureimage" element={<FeatureListWithImage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
  