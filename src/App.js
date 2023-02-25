import React, {BrowserRouter, Route, Routes} from "react-router-dom"; 
import Home from "./pages/home/home";
import HeroSection from "./pages/home/heroSection";
import FeatureListWithImage from "./pages/home/featureSectionWithImage";
import ETABanner from "./pages/home/etaBanner";
import StepsSection from "./pages/home/stepSection";
import WaitList from "./pages/home/waitlistCtaSection";
import Footer from "./components/footer";

// The APP module handles routing

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hsection" element={<HeroSection/>}></Route>
                <Route path="/featureimage" element={<FeatureListWithImage/>}/>
                <Route path="/eta" element={<ETABanner/>}/>
                <Route path="/steps" element={<StepsSection/>}/>
                <Route path="/waitlist" element={<WaitList/>}/>
                <Route path="/footer" element={<Footer/>}/>
            </Routes>
        </BrowserRouter>
    )
}
  