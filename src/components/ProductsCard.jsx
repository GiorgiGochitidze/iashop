
const ProductsCard = ({image, index}) => {
    return ( 
        <div data-aos="fade-up" data-aos-delay={100 * index} className='product-card'>
        <img src={image} alt='clothes image number 1' />
        <h4 style={{textAlign: 'center'}}>ფეხსაცმელები (ბავშვის)</h4><br />
        <p>Lorem ipsum dolor sit amet.</p><br />
        <p>10$</p>
    </div>
     );
}
 
export default ProductsCard;