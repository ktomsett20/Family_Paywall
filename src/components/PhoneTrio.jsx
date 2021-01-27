
import phoneTrioImage from '../Images/family-module-phones-x3.png';

function PhoneTrio (){

    return(
        <div className="flex_container_phone_trio">
            <div>
                <img className="phone_trio_img" src={phoneTrioImage} alt="trioPhoneImage"/>
            </div>

        </div> 
    )
}

export default PhoneTrio;