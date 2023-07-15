import clothes1 from '../assets/clothes1.jpg'

const ProductsCard = ({first, second, third}) => {
    return ( 
        <div className='product-card'>
        <img src={first} alt='clothes image number 1' />
        <h4 style={{textAlign: 'center'}}>ფეხსაცმელები (ბავშვის)</h4><br />
        <p>Lorem ipsum dolor sit amet.</p><br />
        <p>10$</p>
    </div>
     );
}
 
export default ProductsCard;