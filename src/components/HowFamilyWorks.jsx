
import numBoxOne from '../Images/Frame-1.png';
import preferencesFamily from '../Images/rhs2_pref_Family_Mod.png';
import numBoxTwo from '../Images/Frame-2.png';
import recordsFamily from '../Images/records_Family_Mod.png';
import numBoxThree from '../Images/Frame-3.png';
import timelineFamily from '../Images/timeline_Family_Module.png';

// This is the fourth component and goes under 'what is the family module' 
// It contains a header and text at the top, then has multiple 
// images and containers of content aligned in columns down the page 
// Note the light grey background colour 

function HowFamilyWorks (){ 

    return(
        <div className="flex_container_how_family_works hfw_background">
            <div className="how_family_works_title">
                <h2>Here’s how the Family Module works</h2>          
            </div>
            <div className="how_family_works_content">
                <p>We’ve made the Family Module as simple as possible for 
                everyone to use, while still providing family members
                with all the most important health and care information 
                about their loved one.</p>
            </div> 
            <div className="how_family_works_rows">
                <div className="lhs_box">
                    <div className="icon_title_box">
                        <div className="icon_title_box_align">
                            <img className='familyNumBox' src={numBoxOne} alt="numberOne"/>
                            <h3 className="header_box">Set up your preferences & invite family members</h3>
                        </div>
                        <div className="p_box_left">
                            <p>Care Managers first run through a simple set up to get started. 
                            Choose how logs will be viewed by family members, select which 
                            logs you’d like them to have access to and set up your billing options.
                            <br></br>
                            <br></br>
                            You can then invite family members right from your Care Office. 
                            They will then receive some emails from us that will walk them 
                            through how to get started with their Family App.</p>
                        </div>
                    </div>
                </div>
                <div className="rhs_box_none">
                    <img className="how_family_works_preference_img" src={preferencesFamily} alt="familyHowItWorksPreferenceImage"/>
                </div>
            </div>     
            <div className="how_family_works_rows">
                <div className="lhs_box_none">
                    <img className="how_family_works_records_img" src={recordsFamily}  alt="familyHowItWorksRecordsImage"/>
                </div>
                <div className="rhs_box">
                    <div className="icon_title_box">
                        <div className="icon_title_box_align">
                            <img className='familyNumBox' src={numBoxTwo} alt="numberTwo"/>
                            <h3 className="header_box">Carers record care just like normal</h3>
                        </div>
                        <div className="p_box_right">
                            <p>Your Carers go about their day as usual, logging care notes 
                            and tasks and doing what they do best. Carers have access 
                            to one extra log option called the ‘Family Update’, which 
                            they can use to communicate information that family members 
                            would be particularly interested in. Other than that, it’s business as usual.
                            <br></br>
                            <br></br>
                            They use their care coordination platform as normal and 
                            the data gets fed straight into the Family App.</p>
                        </div>
                    </div>    
                </div>
            </div> 
            <div className="how_family_works_rows">
                <div className="lhs_box">
                    <div className="icon_title_box">
                        <div className="icon_title_box_align">
                            <img className='familyNumBox' src={numBoxThree} alt="numberThree"/>
                            <h3 className="header_box">Family members get a simplified timeline of their loved one’s care</h3>
                        </div>
                        <div className="p_box_left">
                            <p>From their very own version of the Log my Care, called 
                            the Family App, famiies can access a timeline of all 
                            the care their loved one has received. It’s simplified 
                            based on the options the Manager chooses during 
                            stage 1 of the setup.
                            <br></br>
                            <br></br>
                            Family members get peace of mind from seeing how their 
                            loved ones are doing and there’s no extra work needed 
                            from you or your care team!</p>
                        </div>
                    </div>    
                </div>
                <div className="rhs_box_none">
                    <img className="how_family_works_timeline_img" src={timelineFamily} alt="familyHowItWorksTimelineImage"/>
                </div>
            </div>  
        </div>
    )
}    

export default HowFamilyWorks; 