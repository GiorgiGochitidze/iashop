import '../components/CSS/Products.css'
import ProductsCard from './ProductsCard';
import clothes from '../assets/clothes.webp'
import clothes2 from '../assets/clothes2.webp'
import clothes3 from '../assets/clothes3.webp'

const Products = () => {

    const first = clothes
    const second = clothes2
    const third = clothes3

    return ( 
        <section className="product-container">
           <ProductsCard first={first} />
           <ProductsCard first={second} />
           <ProductsCard first={third} />
           <ProductsCard first={second} />
           <ProductsCard first={third} />
           <ProductsCard first={first} />
        </section>
     );
}
 
export default Products;