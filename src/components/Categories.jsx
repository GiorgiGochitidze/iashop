import './CSS/Categories.css';
import React, { useState, useEffect } from 'react';
import Footer from './Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = ({ filteredCards }) => {

    useEffect(() => {
        AOS.init({
          duration: 800
        });
      }, []);

  const initialCategories = [
    { name: 'ყველა პროდუქტი', active: true },
    { name: 'ქალი', active: false },
    { name: 'მამაკაცი', active: false },
    { name: 'ბავშვი', active: false },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState('ყველა პროდუქტი');

  const handleCheckActive = (categoryName) => {
    setSelectedCategory(categoryName);
    const updatedCategories = categories.map((category) => ({
      ...category,
      active: category.name === categoryName,
    }));
    setCategories(updatedCategories);
  };

  const filterCardsByCategory = (categoryName) => {
    if (categoryName === 'ყველა პროდუქტი') {
      return filteredCards;
    }
    return filteredCards.filter((card) => card.title.includes(categoryName));
  };

  return (
<>
    <div className='category-container'>
      <div className='category-list'>
        <h1 style={{ marginTop: '20px' }}>კატეგორიები</h1>
        <br />

        {categories.map((category, index) => (
          <p
            key={index}
            onClick={() => handleCheckActive(category.name)}
            style={{
              color: category.active ? 'rgb(188, 35, 188)' : 'black',
            }}
          >
            {category.name}
          </p>
        ))}
      </div>

      <div className='cards-container'>
        {filterCardsByCategory(selectedCategory).map((card) => (
          <div
            style={{ margin: '0 auto' }}
            key={card.id}
            data-aos='fade-up'
            className='product-card'
          >
            <img src={card.url} alt='clothes image number 1' />
            <h4 style={{ textAlign: 'center' }}>{card.title}</h4>
            <br />
            <p>{card.description}</p>
            <br />
            <p>{card.price}</p>
          </div>
        ))}
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Categories;
