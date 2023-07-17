import  './CSS/GoogleMaps.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect } from 'react';

const GoogleMaps = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

    return ( 
        <div className="google-maps-container">
            <h1 data-aos='fade-up'>ჩვენი ლოკაცია:</h1>
          <iframe
            data-aos='fade-up'
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d398.7226741514153!2d41.61389094836031!3d41.63063294402055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sge!4v1689484366034!5m2!1sru!2sge"
            width="550px"
            height="450"
            style={{ border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
     );
}
 
export default GoogleMaps;