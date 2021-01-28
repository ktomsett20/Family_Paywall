
import fivestarsupportgoogle from '../Images/5_star_support_google.png';


function FiveStarSupport () {
    
    return(
        <div className="flex_container_five_star_support">
            <div className="five_star_support_content">
                <div>
                    <h2 className="five_star_support_title"> 5-star support as you'd expect</h2>
                </div>

                <div>
                    <img className="five_star_support_google_image" src={fivestarsupportgoogle} alt='google5Stars' />
                </div>

                <div className="five_star_support_p">
                    <p>Not to brag, but our Customer Success team 
                        has been called “absolutely fantastic”, “superb”, 
                        and “first class” – and that’s just the tip of 
                        the iceberg! We started Log my Care to make Carers’ 
                        lives easier and part of that promise is being 
                        available to answer any questions or concerns you 
                        or your staff may have.
                        <br></br>
                        <br></br>
                        We’re available via phone, email, and a chat 
                        feature that you can see there in the bottom 
                        right-hand corner of the page. Just ping us a message 
                        and one of our team members will be in touch shortly.
                        <br></br>
                        <br></br>
                        While you’re at it, why not check out some of our glowing 
                        reviews here.</p>
                </div>

                
                    <div className="five_star_buttons">
                        <div>
                            <button className="btn1_five_star">I need to create an account</button>
                        </div>

                        <div>
                            <button className="btn2_five_star">I have an account - sign me in</button>
                        </div>
                    </div>
            </div>   

        </div>


     

    )

}

export default FiveStarSupport; 