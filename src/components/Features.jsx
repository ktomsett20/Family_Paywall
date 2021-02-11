
import featuresIconPhoto from '../Images/features_icon_photo.png';
import featuresCarelinePhone from '../Images/features_careline_phone.png';
import featuresDataToggle from '../Images/features_data_toggle.png';
import featuresIconToggle from '../Images/features_icon_toggle.png';
import featuresIconInvitation from '../Images/features_invitation_icon.png';
import featuresInvite from '../Images/features_invite_image.png';

// This is the seventh conponent and goes under 'Testimonial1'
// It contains a header at the top, then has multiple images and 
// containers of content aligned in columns down the page, and 
// two buttons at the bottom
// Note the light grey background colour 


function Features () {
    
    return(
        <div className='flex_container_features features_background'>
            <div className="features_content">
                <div className="features_title">
                    <h2>What features does Family include?</h2>          
                </div>
                <div className="features_rows_1">
                    <div className="features_box_one">
                        <div className="icon_title_box">
                            <div className="features_icon_title_box_align">
                                <img className='features_icon_Box' src={featuresIconPhoto} alt="photoIconImage"/>
                                <h3 className="features_header_box">Care timeline and photos</h3>
                            </div>
                            <div className="features_p_box">
                                <p>Families and friends can log in via the Log 
                                my Care app and see a daily timeline of important care related to tasks, 
                                food, activities and health visits. This gives family members a better 
                                overall picture of how their loved one’s day has been.
                                <br></br>
                                <br></br>
                                Family members are also able to see photos 
                                that have been uploaded by your care staff. Whether it’s a day out to the 
                                beach, a painting they’ve done, or a simple smile, families can see all 
                                of it straight from the app.</p>
                            </div>
                        </div>    
                    </div>
                    <div className="features_rhs_box_one">
                        <img className="care_timeline_phone" src={featuresCarelinePhone} alt="featureCareTimelineImage"/>
                    </div>
                </div>     
                <div className="features_rows_2">
                    <div className="features_lhs_box_none">
                        <img className="data_toggle_image" src={featuresDataToggle}  alt="familyHowItWorksRecordsImage"/>
                    </div>
                    <div className="features_box_two">
                        <div className="icon_title_box">
                            <div className="features_icon_title_box_align">
                                <img className='features_icon_Box' src={featuresIconToggle} alt="featuresSwitch"/>
                                <h3 className="features_header_box">Control what you show with data toggles</h3>
                            </div>
                            <div className="features_p_box_two">
                                <p >You can control exactly what care information gets 
                                shared with family members using our awesome data toggles feature. Hide whole 
                                log categories such as incidents and handovers, or choose to only hide some types 
                                of care.
                                <br></br>
                                <br></br>
                                We love knowing what our granny is up to during 
                                the day, but knowing when she last used the loo is information we could do 
                                without! That’s why you can turn the ‘personal care routines’ option off to 
                                prevent family members from viewing unnecessary notes.</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="features_rows_3">
                    <div className="features_box_three">
                        <div className="icon_title_box">
                            <div className="features_icon_title_box_align">
                                <img className='features_icon_Box' src={featuresIconInvitation} alt="inviteIcon"/>
                                <h3 className="features_header_box">Simple family invitations</h3>
                            </div>
                            <div className="features_p_box">
                                <p>You can invite family members to use the Family App 
                                right from the Care Office. No picking up the phone or spending time chasing family 
                                members. You can go straight to your service users’ profile and invite family 
                                members right from their list of important people. That’s it, the rest is managed by us.
                                <br></br>
                                <br></br>    
                                Families automatically receive an email with simple 
                                directions to get set up with the Family App and your work is done! Super simple 
                                and fast, because we know you’ve got enough on your plate already.</p>
                            </div>
                        </div>
                    </div>
                    <div className="features_rhs_box_three">
                        <img className="features_invite_image" src={featuresInvite} alt="featuresFamilyInvite"/>
                    </div>
                </div>  
                <div className="flex_container_features_buttons"> 
                    <div className="features_buttons">
                        <div>
                            <button className="btn1_features">I need to create an account</button>
                        </div>
                        <div>
                            <button className="btn2_features">I have an account - sign me in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;