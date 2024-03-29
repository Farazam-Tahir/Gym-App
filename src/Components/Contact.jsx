import React from "react";

const Contact = () =>{
    return(
        <div id="contact">
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Enter Your Email"/>
                <textarea name="Message" placeholder="Write Here......"></textarea>
                <input type="submit" value='Send'/>
            </form>
        </div>
    )
}

export default Contact;