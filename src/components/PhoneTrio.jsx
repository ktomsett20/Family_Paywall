
import phoneTrioImage from '../Images/family-module-phones-x3.png';
import phoneTrioImage980 from '../Images/phone_trio_980_img.png';


// This conponent contains only the image of the three phones 
// and goes below the 'What is the family module' section
// Note the grey background starting mid image.

function PhoneTrio (){

    return(
        <div className="flex_container_phone_trio pt_background">
            <div>
                <img className="phone_trio_img" src={phoneTrioImage} alt="trioPhoneImage"/>
            </div>
            <div>
                <img className="phone_trio_980_img" src={phoneTrioImage980} alt="trioPhoneImage980Resolution"/>
            </div>

        </div> 
    )
}

export default PhoneTrio;