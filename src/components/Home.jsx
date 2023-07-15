import "./CSS/Home.css";
import Products from "./Products";

const Home = () => {
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
          />
        </div>

        <Products />
      </main>
    </>
  );
};

export default Home;
