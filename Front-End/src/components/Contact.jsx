import './CSS/Contact.css'
import facebook from '../assets/facebook.png'
import gmail from '../assets/gmail.png'
import maps from '../assets/maps.png'

const Contact = () => {
    return ( 
        <div className="contacts-page-container">
            <div className="contact-card">
                <h1>Contact Us</h1>

                    <img src={gmail} alt="facebook icon" />
                    <a style={{textDecoration: 'none', color: 'white'}} href='mailto:giorgigochitidze555@gmail.com' >giorgigochitidze555@gmail.com</a>
                

                    <img src={maps} alt="facebook icon" />
                    <a style={{textDecoration: 'none', color: 'white'}} href="https://www.facebook.com/evrika.evrika.9">Agmashenebeli St</a>


                    <img src={facebook} alt="facebook icon" />
                    <a style={{textDecoration: 'none', color: 'white'}} href="https://www.facebook.com/evrika.evrika.9">Facebook</a>
            </div>
        </div>
     );
}
 
export default Contact;