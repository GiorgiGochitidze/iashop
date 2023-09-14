import '../components/CSS/Products.css'
import ProductsCard from './ProductsCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Products = ({ filteredCards }) => {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <section className="product-container">
      <ProductsCard filteredCards={filteredCards} />
    </section>
  );
}

export default Products;
