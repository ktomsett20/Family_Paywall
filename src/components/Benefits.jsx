
import bestBenefits from '../Images/benefits_best.png';
import contactBenefits from '../Images/benefits_contact.png';
import surveyBenefits from '../Images/benefits_survey.png';
import cameraBenefits from '../Images/benefits_camera.png';
import meetingBenefits from '../Images/benefits_meeting.png';
import happinessBenefits from '../Images/benefits_happiness.png';


function Benefits (){

    return(
        <div className="flex_container_benefits">

            <div className="benefits_title">
                <h2>What are the benefits of a family care platform?</h2>          
            </div>

            <div className="flex_container_benefits_rows_and_columns">
                
                <div className="left_col">
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={bestBenefits} alt="benefitsBestImage"/>
                        <br></br>
                        <p>Demonstrate Outstanding Care, 
                            innovation and family involvement. </p>
                    </div>
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={contactBenefits} alt="benefitsContactImage"/>
                        <br></br>
                        <p>Increase client contact with loved 
                            ones and boost morale.</p>
                    </div>
                </div>

                <div className="mid_col">
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={surveyBenefits} alt="benefitsSurveyImage"/> 
                        <br></br>
                        <p>Secure and compliant sharing of information.</p>
                    </div>
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={cameraBenefits} alt="benefitsSurveyImage"/> 
                        <br></br>
                        <p>Share happy moments during care with attached photos.</p>
                    </div>
                </div>

                <div className="right_col">
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={meetingBenefits} alt="benefitsMeetingImage"/> 
                        <br></br>
                        <p>Reduces need for face-to-face meetings 
                            and phone calls.</p>
                    </div>
                    <div className="benefits_column_box">
                        <img className= 'benefitsIcons' src={happinessBenefits} alt='benefitsHappinessImage' />
                        <br></br>
                        <p>Give families peace of mind by keeping 
                            them in touch with their loved ones in your care.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Benefits;