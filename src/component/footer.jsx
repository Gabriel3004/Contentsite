import Technotools from "./Bilder/Technotools.png";
import './myfooter.css'

function MyFooter () {
    
    return (
        <>
        <section className='container-foot'>
            <div className="Acount">
                <div className="newsletter">
                <h2>Newsletter Signup</h2>
                <p>Signup to get the latest news...</p>
                </div>

                <div>
                    <form action="email">
                    <input type="email" placeholder="Your Email Addresse" /></form>
                    <button className='ok'>OK</button>
                </div>
            </div>

            <div id="Logo">
            <img width= "350px" height="250px" src={Technotools} alt="Logo" />
            </div>

            <div className="contact">
                <h2>Contact Us</h2>

                    <div className="info">                     
                        <div className="contact-me">
                        <img src="" alt="" />
                        <p>2701 RIVERSIDE DR SUITE N0813 <br /> OTTAWA</p>
                        </div>

                        <div className="contact-me">
                        <img src="" alt="" />
                            <p>+971005555150
                                <br />
                                +97116699898
                            </p>
                        </div>

                        <div className="contact-me">
                        <img src="" alt="" />
                            <p>info@templatesjugle.com</p>
                        </div>
                        
                    </div>
            </div>

        <div className="socialmedia">
            <a href="#"><img src= "" alt="instagram" /></a>
            <a href="#"><img src= "" alt="facebook" /></a>
            <a href="#"><img src="" alt="youtube" /></a>
            <a href="#"><img src="" alt="twitter" /></a>
        </div>

        <div id="copy">
            <p>&copy; Copyright 2022 All Rights Reserved.</p>
        </div>

    
        </section>

        </>
    )
}

export default MyFooter