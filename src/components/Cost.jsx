
import costBillFamily from '../Images/cost_bill_family.png';
import costBillCareservice from '../Images/cost_bill_careservice.png';
import costMostPopularIcon from '../Images/cost_most_popular_option_icon.png';

// This is the eighth component goes under 'Features' 
// Contains a header, text then two containers both holding 
// images, header, text and a list
// Notes seperate image to the right 'Our most popular option'

function Cost () {

    return(
        <div className="flex_container_cost">

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

                <div className="cost_most_popular_icon">
                    <img src={costMostPopularIcon} alt="mostPopularOpinionImage" />
                </div>

            </div>

        </div>


    )

}

export default Cost;