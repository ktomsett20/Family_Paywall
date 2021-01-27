
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



// import familyHeroImage from '../Images/family-module-hero-image.png';

// import iconFamilyImage from '../Images/icon-family.png';

// import phoneTrioImage from '../Images/family-module-phones-x3.png';

// import numBoxOne from '../Images/Frame-1.png';
// import preferencesFamily from '../Images/rhs2_pref_Family_Mod.png';
// import numBoxTwo from '../Images/Frame-2.png';
// import recordsFamily from '../Images/records_Family_Mod.png';
// import numBoxThree from '../Images/Frame-3.png';
// import timelineFamily from '../Images/timeline_Family_Module.png';

// import bestBenefits from '../Images/benefits_best.png';
// import contactBenefits from '../Images/benefits_contact.png';
// import surveyBenefits from '../Images/benefits_survey.png';
// import cameraBenefits from '../Images/benefits_camera.png';
// import meetingBenefits from '../Images/benefits_meeting.png';
// import happinessBenefits from '../Images/benefits_happiness.png';

// import testimonalQuoteOpen from '../Images/lhs_quotemarks_testimonial.png';
// import testimonalQuoteClose from '../Images/rhs_quotemarks_testimonial.png';

// import featuresIconPhoto from '../Images/features_icon_photo.png';
// import featuresCarelinePhone from '../Images/features_careline_phone.png';
// import featuresDataToggle from '../Images/features_data_toggle.png';
// import featuresIconToggle from '../Images/features_icon_toggle.png';
// import featuresIconInvitation from '../Images/features_invitation_icon.png';
// import featuresInvite from '../Images/features_invite_image.png';


// import costBillFamily from '../Images/cost_bill_family.png';
// import costBillCareservice from '../Images/cost_bill_careservice.png';

// import testimonialOne from './testimonial_background_1.png';

// import dataSecurePadlock from '../Images/data_secure_padlock.png';



function App() {
  return (
<div>

        <Hero/>   

        {/* <div className="flex_container_hero"> 
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

        </div> */}

        <WhatIsFamilyModule/>

        {/* <div className="flex_container_what_is_family_module">     
        
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

        </div> */}

        <PhoneTrio/>

        {/* <div className="flex_container_phone_trio">
            <div>
                <img src={phoneTrioImage} alt="trioPhoneImage"/>
            </div>

        </div>  */}

        <HowFamilyWorks/>

        {/* <div className="flex_container_how_family_works">

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
                    <div>
                        <img className='familyNumBox' src={numBoxOne} alt="numberOne"/>
                        <h3 className="header_box">Set up your preferences & invite family members</h3>
                    </div>

                    <p className="p_box">Care Managers first run through a simple set up to get started. 
                    Choose how logs will be viewed by family members, select which 
                    logs you’d like them to have access to and set up your billing options.</p>
                    
                    <p className="p_box">You can then invite family members right from your Care Office. 
                    They will then receive some emails from us that will walk them 
                    through how to get started with their Family App.</p>
                </div>
            
                <div className="rhs_box_none">
                    <img src={preferencesFamily} alt="familyHowItWorksPreferenceImage"/>
                </div>

            </div>     

            <div className="how_family_works_rows">

                <div className="lhs_box_none">
                    <img src={recordsFamily}  alt="familyHowItWorksRecordsImage"/>
                </div>
                
                <div className="rhs_box">
                    <img className='familyNumBox' src={numBoxTwo} alt="numberTwo"/>
                    <h3 className="header_box">Carers record care just like normal</h3>
                    <p className="p_box">Your Carers go about their day as usual, logging care notes 
                        and tasks and doing what they do best. Carers have access 
                        to one extra log option called the ‘Family Update’, which 
                        they can use to communicate information that family members 
                        would be particularly interested in. Other than that, it’s business as usual.</p>

                    <p className="p_box">They use their care coordination platform as normal and 
                        the data gets fed straight into the Family App.</p>
                </div>
            </div> 

            <div className="how_family_works_rows">
                <div className="lhs_box">
                    <img className='familyNumBox' src={numBoxThree} alt="numberThree"/>
                    <h3 className="header_box">Family members get a simplified timeline of their loved one’s care</h3>

                    <p className="p_box">From their very own version of the Log my Care, called 
                        the Family App, famiies can access a timeline of all 
                        the care their loved one has received. It’s simplified 
                        based on the options the Manager chooses during 
                        stage 1 of the setup.</p>
                        
                    <p className="p_box">Family members get peace of mind from seeing how their 
                        loved ones are doing and there’s no extra work needed 
                        from you or your care team!</p>
                </div>
                
                <div className="rhs_box_none">
                    <img src={timelineFamily} alt="familyHowItWorksTimelineImage"/>
                </div>
            </div>  
        </div> */}


        <Benefits/>

        {/* <div className="flex_container_benefits">

            <div className="benefits_title">
                <h2>What are the benefits of a family care platform?</h2>          
            </div>
        
            <div className="flex_container_benefits_rows_and_columns">
                
                <div className="left_col">
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={bestBenefits} alt="benefitsBestImage"/>
                        <p>Demonstrate Outstanding Care, 
                            innovation and family involvement. </p>
                    </div>
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={contactBenefits} alt="benefitsContactImage"/>
                        <p>Increase client contact with loved 
                            ones and boost morale.</p>
                    </div>
                </div>

                <div className="mid_col">
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={surveyBenefits} alt="benefitsSurveyImage"/> 
                        <p>Secure and compliant sharing of information.</p>
                    </div>
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={cameraBenefits} alt="benefitsSurveyImage"/> 
                        <p>Share happy moments during care with attached photos.</p>
                    </div>
                </div>

                <div className="right_col">
                    <div className="benefits_column_box">
                        <img className="benefitsIcons" src={meetingBenefits} alt="benefitsMeetingImage"/> 
                        <p>Reduces need for face-to-face meetings 
                            and phone calls.</p>
                    </div>
                    <div className="benefits_column_box">
                        <img className= 'benefitsIcons' src={happinessBenefits} alt='benefitsHappinessImage' />
                        <p>Give families peace of mind by keeping 
                            them in touch with their loved ones in your care.</p>
                    </div>
                </div>
        
            </div>
        </div> */}

        <Testimonial1/>
       
        {/* <div className="flex_container_testimonial testimonial_1">
            <div> 
              
            </div>
        
            <div className="testimonial_content">

                <div>
                    <img className="lhs_quotemarks" src={testimonalQuoteOpen} alt='quoteMarks' />
                </div>
                
                <div>
                    <h3 className="testimonial_header">We had a family member who used to love to go and check 
                    all of our paperwork all of the time, but obviously we 
                    stopped all of the paperwork when we went digital. She 
                    wasn’t very happy about that! Now she’s thrilled because 
                    she can keep an eye on things with the Family App.</h3>
                </div>
                
                <div>
                    <h3 className="testimonial_header">She has no problems or issues at all using the app. The 
                    Carers lives are so much easier. All of our staff absolutely 
                    love it. We love Log my Care.</h3>
                </div>

                <div>
                    <p className="testimonial_header">Aaron Rixon, Sunshine Care</p>
                </div>

                <div>
                    <img className="rhs_quotemarks" src={testimonalQuoteClose} alt='quoteMarks' />
                </div>
                

            </div>
        </div> */}

        <Features/>

        {/* <div className="flex_container_features">

            <div className="features_title">
                <h2>What features does Family include?</h2>          
            </div>

            <div className="features_rows">

                <div className="features_timeline_box">
                    <img className='features_icon_Box' src={featuresIconPhoto} alt="photoIconImage"/>
                    <h3 className="features_header_box">Care timeline and photos</h3>
                
                    <p className="features_p_box">Families and friends can log in via the Log 
                    my Care app and see a daily timeline of important care related to tasks, 
                    food, activities and health visits. This gives family members a better 
                    overall picture of how their loved one’s day has been.</p>
                    
                    <p className="features_p_box">Family members are also able to see photos 
                    that have been uploaded by your care staff. Whether it’s a day out to the 
                    beach, a painting they’ve done, or a simple smile, families can see all 
                    of it straight from the app.</p>
                </div>
            
                <div className="features_rhs_box_none">
                    <img className="care_timeline_phone" src={featuresCarelinePhone} alt="featureCareTimelineImage"/>
                </div>

            </div>     

            <div className="features_rows">

                <div className="features_lhs_box_none">
                    <img className="data_toggle_image" src={featuresDataToggle}  alt="familyHowItWorksRecordsImage"/>
                </div>
                
                <div className="features_toggle_box">
                    <img className='features_icon_Box' src={featuresIconToggle} alt="featuresSwitch"/>
                    <h3 className="features_header_box">Control what you show with data toggles</h3>
                    <p className="features_p_box">You can control exactly what care information gets 
                    shared with family members using our awesome data toggles feature. Hide whole 
                    log categories such as incidents and handovers, or choose to only hide some types 
                    of care.</p>

                    <p className="features_p_box">We love knowing what our granny is up to during 
                    the day, but knowing when she last used the loo is information we could do 
                    without! That’s why you can turn the ‘personal care routines’ option off to 
                    prevent family members from viewing unnecessary notes.</p>
                </div>
            </div> 

            <div className="features_rows">
                <div className="features_invite_box">
                    <img className='features_icon_Box' src={featuresIconInvitation} alt="inviteIcon"/>
                    <h3 className="features_header_box">Simple family invitations</h3>

                    <p className="features_p_box">You can invite family members to use the Family App 
                    right from the Care Office. No picking up the phone or spending time chasing family 
                    members. You can go straight to your service users’ profile and invite family 
                    members right from their list of important people. That’s it, the rest is managed by us.</p>
                        
                    <p className="features_p_box">Families automatically receive an email with simple 
                    directions to get set up with the Family App and your work is done! Super simple 
                    and fast, because we know you’ve got enough on your plate already.</p>
                </div>
                
                <div className="features_rhs_box_none">
                    <img src={featuresInvite} alt="featuresFamilyInvite"/>
                </div>
            </div>  
            <div className="flex_container_features_buttons"> 
                <div className="features_buttons">
                    <div>
                        <button className="btn1_features">Activate your account today</button>
                    </div>

                    <div>
                        <button className="btn2_features">I have an account - sign me in</button>
                    </div>
                </div>
            </div>

        </div> */}

        <Cost/>

        {/* <div className="flex_container_cost">

            <div className="cost_content">
                
                <div className="cost_title">
                    <h2>How much does the Family Module cost?</h2>
                </div>
                
                <div className="cost_title_2">  
                    <h2>Choose a payment option that suits you best</h2>
                </div>
                
                <div className="cost_p">
                    <p>We know care services are being squeezed on all sides financially 
                        and additional costs are never helpful.
                        <br></br>
                        That’s why we give two different payment options for the Family Module. 
                        <br></br>
                        You can choose to either:</p>
                </div>

            </div>
            

            <div className="cost_rows">

                <div className="cost_left_col">

                    <img className="cost_bill_family_image" src={costBillFamily} alt="billFamilyImage"/>

                    <h3 className="cost_col_heading_1">Bill directly to families</h3>
                    <h4 className="cost_col_heading_2">£9.99 per month</h4>
                    <h4 className="cost_col_heading_3">Paid for by families</h4>

                    <p className="cost_col_p"> Family members can pay for their own accounts if they wish 
                        to access the Family App. The first month is offered as a free trial.</p>
                    
                    <p className="cost_col_p_bold">This is a great option if:</p>
                    <ul className="cost_col_list"> 
                        <li>You want families to have full control over their billing</li>
                        <li>Only a few families need access to the Family App</li>
                        <li>You want to keeps costs lower for your service</li>

                    </ul>
                </div>

                <div className="cost_right_col">

                    <img className="cost_bill_careservice_image" src={costBillCareservice} alt="billcareserviceImage"/>

                    <h3 className="cost_col_heading_1">Bill to your care service</h3>
                    <h4 className="cost_col_heading_2">£5(+VAT) for every clients per month</h4>
                    <h4 className="cost_col_heading_3">Paid for by you</h4>

                    <p className="cost_col_p"> Your care service can choose to subscribe 
                    to the Family Module on behalf of the families of your clients for 
                    £5 (+VAT) a month, with a minimum charge of £20 (+VAT). 30 day free trial included.</p>
                    
                    <p className="cost_col_p_bold">Choose this option if:</p>
                    <ul className="cost_col_list"> 
                        <li>You want to demonstrate your care service’s innovation and value, and attract new families.</li>
                        <li>Billing should be handled in-house and you don’t want to get families involved.</li>
                        <li>You plan on offering the Family App to as many families as you like.</li>

                    </ul>
                </div>

            </div>

        </div> */}

        <Testimonial2/>

        {/* <div className="flex_container_testimonial testimonial_2">
        
            <div className="testimonial_content">
                
                <div>
                    <img className="lhs_quotemarks" src={testimonalQuoteOpen} alt='quoteMarks' />
                </div>
                
                <div>
                    <h3 className="testimonial_header">As visitations are not allowed at the moment, 
                    I have found the Family App really useful to stay up to date with how my mum 
                    is doing.</h3>
                </div>
                
                <div>
                    <h3 className="testimonial_header">I log on everyday to see whether the 
                    doctor has visited and seeing pictures of mum on the timeline really 
                    brightens my day. It also saves me having to ring the home so often to 
                    check how she is</h3>
                </div>

                <div>
                    <p className="testimonial_header">Trudy Dance, Family Member</p>
                </div>

                <div>
                    <img className="rhs_quotemarks" src={testimonalQuoteClose} alt='quoteMarks' />
                </div>
                

            </div>
        </div> */}

        <DataSecurity/>

        {/* <div className="flex_container_data_secure">

            <div className="lhs_box_data_secure">
            
                <h2 className="data_heading">Secure & compliant from the outset</h2>

                <div className="data_p_box">
                    <p >We take data security very seriously. As 
                    with the rest of our care system, the Family Module is secured to 
                    NHS standards and is fully GDPR compliant.</p>
                    
                    <p>However, we know this isn’t always enough, that’s why Care Managers 
                    have full access over which information families can see through 
                    the care platform, switching it on or off as required by your 
                    service users.</p>
                </div>
                
            </div>

            <div className="rhs_box_data_secure">
                <img src={dataSecurePadlock} alt="dataSecuirtyImage"/>
            </div>

        </div>      */}

        <FiveStarSupport/>





</div>

    )
}
    
export default App;
