
import './App.css';

import Hero from "./components/Hero";
import WhatIsFamilyModule from "./components/WhatIsFamilyModule";
import PhoneTrio from "./components/PhoneTrio";
import HowFamilyWorks from "./components/HowFamilyWorks";
import Benefits from "./components/Benefits";
import Testimonial1 from "./components/Testimonial1";
import Features from "./components/Features";
import Cost from "./components/Cost";
import Testimonial2 from "./components/Testimonial2";
import DataSecurity from "./components/DataSecurity";
import FiveStarSupport from "./components/FiveStarSupport";

//This is the webapp for the Family module for LMC. 
//The structure is broken out into each component 
// of the sections within the webpage. 

function App() {
  return (
<div>

        <Hero/>   
        <WhatIsFamilyModule/>
        <PhoneTrio/>
        <HowFamilyWorks/>
        <Benefits/>
        <Testimonial1/>
        <Features/>
        <Cost/>
        <Testimonial2/>
        <DataSecurity/>
        <FiveStarSupport/>

</div>

    )
}
    
export default App;
