
import dataSecurePadlock from '../Images/data_secure_padlock.png';

function DataSecurity () {
    return(
        <div className="flex_container_data_secure">
            <div className="data_secure_content">
                <div className="lhs_box_data_secure">
                
                    <h2 className="data_heading">Secure & compliant from the outset</h2>

                    <div className="data_p_box">
                        <p >We take data security very seriously. As 
                        with the rest of our care system, the Family Module is secured to 
                        NHS standards and is fully GDPR compliant.
                        <br></br>
                        <br></br>
                        However, we know this isn’t always enough, that’s why Care Managers 
                        have full access over which information families can see through 
                        the care platform, switching it on or off as required by your 
                        service users.</p>
                    </div>
                    
                </div>
            
                <div className="rhs_box_data_secure">
                    <img src={dataSecurePadlock} alt="dataSecuirtyImage"/>
                </div>
            </div>
        </div> 


    )

}

export default DataSecurity;