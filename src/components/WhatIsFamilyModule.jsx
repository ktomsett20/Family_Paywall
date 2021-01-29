
import iconFamilyImage from '../Images/icon-family.png';

// This is the second section and contains the family icon
// the section title and text. 
// Note the image of three phones is within its own component 'PhoneTrio'.


function WhatIsFamilyModule () {

    return(
        <div className="flex_container_what_is_family_module">     
            
            <div>
                <img className="iconFamilyImage" src={iconFamilyImage} alt='familyIcon' />
            </div>
            
            <div>
                <h2 className="what_is_family_title"> What is the Family Module?</h2>
            </div>

            <div className="what_is_family_content">
                <p>Family is our first module designed to help people outside 
                of your care service to stay in touch with their loved ones. 
                It simplifies the way that care notes and care records are 
                viewed by giving family and friends access to your service users’ 
                care information in a simplified timeline in the Family App.
                <br></br>
                <br></br>
                By signing up to the Family module you are providing added 
                value to families and friends of your residents by giving them 
                access to their very own care platform. Keep them up-to-date 
                with the well-being, health and mood of their loved ones in your care.</p>
            </div>

        </div>
    )

}

export default WhatIsFamilyModule;