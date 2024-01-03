import React from 'react';
import './footer.css';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import insta from '../images/insta.png';
const Footer=()=>{
    return(
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h2>Quick Links</h2>
            <a href="/home">
                <p>Home Page</p>
            </a>
            <a href="/about">
                <p>Zero Degree</p>
            </a>
            <a href="/signup">
                <p>Register Here</p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h2>What We Do</h2>
            <a href="/whatwedo">
                <p>Wedding events</p>
            </a>
            <a href="/whatwedo">
                <p>Engagement</p>
            </a>
            <a href="/whatwedo">
                <p>Corporate Events</p>
                </a>
            <a href="/whatwedo">
                <p>Birthday Party</p>
                </a>
            <a href="/whatwedo">
                <p>Housewarming</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h2>What We Do</h2>
            <a href="/whatwedo">
                <p>Get Together</p>
            </a>
            <a href="/whatwedo">
                <p>Annivesary</p>
            </a>
            <a href="/whatwedo">
                <p>Company Award Ceremony</p>
            </a>
            <a href="/whatwedo">
                <p>School/College Alumni</p>
            </a>
            <a href="/whatwedo">
                <p>Other Family Functions</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h2>Company</h2>
            <a href="/about">
                <p>About</p>
            </a>
            <a href="/contact">
                <p>Contact</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                <p><a href="https://www.facebook.com/"><img src={fb} alt=""/></a></p>
                <p><a href="https://twitter.com/i/flow/login"><img src={twitter} alt=""/></a></p>
                <p><a href="https://in.linkedin.com/"><img src={linkedin} alt=""/></a></p>
                <p><a href="https://www.instagram.com/"><img src={insta} alt=""/></a></p>
            </div>
          </div>
</div>
<hr></hr>
<br></br>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p> Copyright@ 2023 Zero Degree Event Planning and Decor. All right reserved....</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions | </p></div></a>
        <a href="/privacy"><div><p>Privacy |</p></div></a>
        <a href="/faq"><div><p>FAQ |</p></div></a>
    </div>
    <br></br>
</div>
        </div>
        <br></br>
        </div>

    )
}
export default Footer;