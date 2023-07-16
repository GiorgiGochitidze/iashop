import '../components/CSS/Products.css'
import ProductsCard from './ProductsCard';
import clothes from '../assets/clothes.webp'
import clothes2 from '../assets/clothes2.webp'
import clothes3 from '../assets/clothes3.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect } from 'react';


const Products = () => {

   useEffect(() => {
      AOS.init({
        duration: 800
      });
    }, []);

   const images = [clothes, clothes2, clothes3, clothes2, clothes3, clothes];

    return ( 
      <section className="product-container">
      {images.map((image, index) => (
        <ProductsCard key={index} image={image} index={index}/>
      ))}
    </section>
     );
}
 
export default Products;