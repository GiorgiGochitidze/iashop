import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import { HashRouter as Router,  Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Cards } from './backend/productscards';
import ComingSoon from './components/ComingSoon';
import NewProducts from './components/NewProducts';
import Contact from './components/Contact';
import Registration from './components/Registration';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [headermenu, setHeadermenu] = useState(false)

  // filter for searchbar apologizes on cards title and description
  const filteredCards = inputValue
    ? Cards.filter((card) =>
        card.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        card.description.toLowerCase().includes(inputValue.toLowerCase())
      )
    : Cards;

  return (
    <>

      <header>
        <nav>
          <h3 onClick={() => headermenu ? setHeadermenu(false) : setHeadermenu(true)}>Menu</h3>
          <Link className="linksfix" to='/'><p>მთავარი</p></Link>
          <Link className="linksfix" to='/Categories'><p>კატეგორიები</p></Link>
          <Link className="linksfix" to='/NewProducts'><p>ახალი პროდუქტები</p></Link>
          <Link className="linksfix" to='/Contact'><p>კონტაქტი</p></Link>
          <Link className="linksfix" to='/Registration'><p>რეგისტრაცია</p></Link>
        </nav>

        {headermenu && 
        <div className="menubar">
          <Link onClick={() => headermenu ? setHeadermenu(false) : setHeadermenu(true)} style={{color: 'black'}} className="linksfixing" to='/'>მთავარი</Link>
          <Link onClick={() => headermenu ? setHeadermenu(false) : setHeadermenu(true)} style={{color: 'black'}} className="linksfixing" to='/Categories'>კატეგორიები</Link>
          <Link onClick={() => headermenu ? setHeadermenu(false) : setHeadermenu(true)} style={{color: 'black'}} className="linksfixing" to='/NewProducts'>ახალი პროდუქტები</Link>
          <Link onClick={() => headermenu ? setHeadermenu(false) : setHeadermenu(true)} style={{color: 'black'}} className="linksfixing" to='/Contact'>კონტაქტი</Link>
          <Link onClick={() => headermenu ? setHeadermenu(false) : setHeadermenu(true)} style={{color: 'black'}} className="linksfixing" to='/Registration'><p>რეგისტრაცია</p></Link>
        </div>
        }
      </header>

        <Routes>
          <Route exact path="/" element={<Home filteredCards={filteredCards} inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route exact path="/Categories" element={<Categories filteredCards={filteredCards} />} />
          <Route exact path="/NewProducts" element={<NewProducts />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
    </>
  );
}

export default App;
