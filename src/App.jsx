import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>

      <header>
        <nav>
          <Link className="linksfix" to='/'><p>მთავარი</p></Link>
          <Link className="linksfix" to='/Categories'><p>კატეგორიები</p></Link>
          <p>სიახლეები</p>
          <p>კონტაქტი</p>
        </nav>
      </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Categories" element={<Categories />} />
        </Routes>
    </>
  );
}

export default App;
