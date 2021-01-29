
import testimonalQuoteOpen from '../Images/lhs_quotemarks_testimonial.png';
import testimonalQuoteClose from '../Images/rhs_quotemarks_testimonial.png';

// This is component ninth and goes under 'Cost'
// and is the second testimonial on page
// Contains background image, and two quote marks images and text
// Note paralax to be added 

function Testimonial2 () {

    return(
        <div className="flex_container_testimonial testimonial_2">
        
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
        </div>



    )

}


export default Testimonial2;