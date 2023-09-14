import "./CSS/Home.css";
import GoogleMaps from "./GoogleMaps";
import Products from "./Products";
import Footer from './Footer'
import {Cards} from '../backend/productscards';
import React, { useState } from 'react';
import ProductsCard from "./ProductsCard";



const Home = ({filteredCards, inputValue, setInputValue}) => {

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>

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
        
        {/* a code wich generating text result not found if in searchbar not matched words wich contain cards title or description */}
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
