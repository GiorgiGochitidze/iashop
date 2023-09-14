const ProductsCard = ({ filteredCards }) => {
    return (
      <>
        {filteredCards.map((arrays) => (
          <div style={{margin: '20px auto'}} key={arrays.id} className='product-card'>
            <img src={arrays.url} alt='clothes image number 1' />
            <h4 style={{ textAlign: 'center' }}>{arrays.title}</h4><br />
            <p>{arrays.description}</p><br />
            <p>{arrays.price}</p>
          </div>
        ))}
      </>
    );
  }
  
  export default ProductsCard;
  