import image from "./homepage.webp"; 
import HomeHero from "./HomeHero";
import Happ from "./Imageslider/Happ";
import Footer from "../Footer/Footer";
import FounderSection from "./FounderSection";

 export default function Home(){

    return <div style={{ backgroundImage:`url(${image})` }}>
        <HomeHero/>
        <Happ/>
        <FounderSection/>
        <Footer/>
    </div>
}