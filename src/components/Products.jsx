import '../components/CSS/Products.css'
import ProductsCard from './ProductsCard';

const Products = () => {
    return ( 
        <section className="product-container">
           <ProductsCard />
           <ProductsCard />
           <ProductsCard />
           <ProductsCard />
        </section>
     );
}
 
export default Products;