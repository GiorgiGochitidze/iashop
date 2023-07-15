import "./CSS/Home.css";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <p>მთავარი</p>
          <p>ჩვენს შესახებ</p>
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

        <div className="product-container">
            
        </div>
      </main>
    </>
  );
};

export default Home;
