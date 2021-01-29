
import phoneTrioImage from '../Images/family-module-phones-x3.png';

// This conponent contains only the image of the three phones 
// and goes below the 'What is the family module' section
// Note the grey background starting mid image.

function PhoneTrio (){

    return(
        <div className="flex_container_phone_trio pt_background">
            <div>
                <img className="phone_trio_img" src={phoneTrioImage} alt="trioPhoneImage"/>
            </div>

        </div> 
    )
}

export default PhoneTrio;