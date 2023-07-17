import './CSS/Footer.css'
import maps from '../assets/maps.png'
import phone from '../assets/phoneicon.png'
import gmail from '../assets/gmail.png'

const Footer = () => {

    return ( 
        <footer>
            <div className='icons-container'>

                <div className='correcting'>
                    <img src={maps} alt='maps icon' />
                     <p>Find Us: <br /> Agmashenebeli St</p>
                </div>

                <div className='correcting'>
                    <img src={phone} alt='phone icon' />
                    <p>Call Us: <br /> 557899910</p>
                </div>

                <div className='correcting'>
                    <img src={gmail} alt='gmail icon' />
                    <p>Mail Us: <br /> giorgigochitidze555@gmail.com</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
