
import testimonalQuoteOpen from '../Images/lhs_quotemarks_testimonial.png';
import testimonalQuoteClose from '../Images/rhs_quotemarks_testimonial.png';

// This is the sixth component and goes under 'Benefits' 
// and first testimonial on page
// Contains background image, and two quote marks images and text
// Note paralax to be added 

function Testimonial1 (){
    
    return(

        <div className="flex_container_testimonial testimonial_1">
        
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
        </div>

    )

}

export default Testimonial1;