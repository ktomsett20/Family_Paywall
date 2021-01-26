

import familyHeroImage from '../Images/family-module-hero-image.png';


function Hero (){

    return (
        <div className="flex_container_hero"> 
            <div className="lhs_hero">

            <div className="first_heading_hero">
                <h1>Keeping clients & loved ones connected 
                has never been easier with our care platform</h1> 
            </div>

            <div className="second_heading_hero">
                <h4>It’s more important than ever to keep your 
                    residents close to their families. 
                    Our Family Module gives you an easy way to 
                    keep family and friends of your clients up-to-date 
                    with their care, well-being and health.</h4>
            </div>
                
            <div>
                <button className="btn1_hero">Activate your account today</button>
            </div>

            <div>
                <button className="btn2_hero">I have an account - sign me in</button>
            </div>

            </div>

            <div className="rhs_hero">
                <img className='familyHeroImage' src={familyHeroImage} alt="heroImage"/>
            </div>

        </div>


    )
}

export default Hero;
