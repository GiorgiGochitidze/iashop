import './CSS/NewProducts.css';
import { Cards } from '../backend/productscards';
import Footer from './Footer.jsx'

const NewProducts = () => {
  const filteredCards = Cards.filter((card) => card.new); // Filter cards with "new" true

  return (
    <>
    <div className="new-products-container">
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>ახალი პროდუქტები</h1>

      <div className="cardss-container">
        {filteredCards.map((card) => (
          <div style={{ margin: '20px auto' }} key={card.id} className='products-card'>
            <img src={card.url} alt='clothes image number 1' />
            <h4 style={{ textAlign: 'center' }}>{card.title}</h4><br />
            <p>{card.description}</p><br />
            <p>{card.price}</p>
          </div>
        ))}
      </div>
    </div>
      <Footer />
      </>
  );
}

export default NewProducts;
