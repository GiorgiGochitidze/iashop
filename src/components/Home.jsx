import "./CSS/Home.css";
import GoogleMaps from "./GoogleMaps";
import Products from "./Products";
import Footer from './Footer'
import {Cards} from '../backend/productscards';
import React, { useState } from 'react';
import ProductsCard from "./ProductsCard";



const Home = () => {

  const [inputValue, setInputValue] = useState('');

  const filteredCards = inputValue
    ? Cards.filter((card) =>
        card.description.toLowerCase().includes(inputValue.toLowerCase())
      )
    : Cards;

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <header>
        <nav>
          <p>მთავარი</p>
          <p>კატეგორიები</p>
          <p>სიახლეები</p>
          <p>კონტაქტი</p>
        </nav>
      </header>

      <main>
        <div className="searchbar-container">
          <input
            className="search-bar"
            type="text"
            placeholder="შეიყვანეთ საძიებო სიტყვა"
            value={inputValue}
            onChange={handleChangeInput}
          />
        </div>
        
        {filteredCards.length === 0 ? (
          <p className="resultnotfound">შედეგები ვერ მოიძებნა</p>
        ) : filteredCards.length === 1 ? (
          <ProductsCard filteredCards={filteredCards} />
        ) : (
          <Products filteredCards={filteredCards} />
        )}

        <GoogleMaps />
        <Footer />
      </main>
    </>
  );
};

export default Home;
