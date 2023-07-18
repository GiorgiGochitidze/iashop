import "./CSS/Categories.css";
import React, { useState, useEffect } from "react";
import Footer from "./Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = ({ filteredCards }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const initialCategories = [
    { name: "ყველა პროდუქტი", active: true, subcategories: [] },
    {
      name: "ქალი",
      active: false,
      subcategories: [
        "ჯინსი",
        "ნაჭრის შარვალი",
        "შორტი",
        "მაისური",
        "პერანგი",
        "ბლუზი",
        "ჯემპრი",
        "ჟაკეტი",
        "ქურთუკი",
        "ჟილეტი",
        "პიჯაკი",
        "კაბა",
        "ქვედაბოლო",
        "კომბინიზონი",
      ],
    },
    {
      name: "მამაკაცი",
      active: false,
      subcategories: [
        "ჯინსი",
        "შარვალი",
        "შორტი",
        "მაისური",
        "პოლო მაისური",
        "პერანგი",
        "ჯემპრი",
        "ჟილეტი",
        "ქურთუკი",
        "ჟილეტი",
        "პიჯაკი",
        "მამაკაცის ფეხსაცმელები:",
        "კლასიკური",
        "ყოველდღიური",
        "სპორტული",
        "კედი",
        "ესპადრილი",
        "შუზი",
        "ბათინკი",
        "სანდალი",
        "ჩუსტი",
        "ფეხსაცმლის აქსესუარები:",
        "მოვლის საშუალებები",
        "სუპინატორი",
        "ფეხსაცმლის მაშველი",
      ],
    },
    { name: "ბავშვი: ბიჭი",
     active: false,
     subcategories: [
        "ჯინსი",
        "შარვალი",
        "შორტი",
        "მაისური",
        "პერანგი",
        "ბლუზი",
        "ჯემპრი",
        "ჟაკეტი",
        "ქურთუკი",
        "ჟილეტი",
        "პიჯაკი",
        "თეთრეული",
        "საცურაო კოსტუმი",
        "ბავშვის ბოდე",
        ] },

        { name: "ბავშვი: გოგო",
     active: false,
     subcategories: [
        "ჯინსი",
        "შარვალი",
        "შორტი",
        "მაისური",
        "პერანგი",
        "ბლუზი",
        "ჯემპრი",
        "ჟაკეტი",
        "ქურთუკი",
        "ჟილეტი",
        "პიჯაკი",
        "კაბა",
        "ქვედაბოლო",
        "კომბინიზონი",
        "თეთრეული",
        "საცურაო კოსტუმი",
        "ბავშვის ბოდე",
        ] },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(true);

  const handleCheckActive = (categoryName) => {
    setSelectedCategory(categoryName);
  
    // Toggle showSubcategories state when the same category is clicked again
    if (selectedCategory === categoryName) {
      setShowSubcategories((prevShowSubcategories) => !prevShowSubcategories);
    } else {
      setShowSubcategories(true); // Show submenu for the newly clicked category
    }
  };

  const filterCardsByCategory = (categoryName) => {
    if (categoryName === "ყველა პროდუქტი") {
      return filteredCards;
    }
    return filteredCards.filter((card) => card.title.includes(categoryName));
  };
    
    return (
      <>
      <div className="category-container">
        <div className="category-list">
          <h1 style={{ marginTop: "20px" }}>კატეგორიები</h1>
          <br />

          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <p
                onClick={() => handleCheckActive(category.name)}
                style={{
                  color: selectedCategory === category.name ? "rgb(188, 35, 188)" : "black",
                }}
              >
                {category.name}
              </p>
              {selectedCategory === category.name && category.subcategories.length > 0 && (
                <div style={{ marginLeft: "20px" }}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <p
                      style={{
                        textAlign: "center",
                        color: selectedCategory === subcategory ? "rgb(188, 35, 188)" : "black",
                      }}
                      key={subIndex}
                      onClick={() => handleCheckActive(subcategory)}
                    >
                      {subcategory}
                    </p>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="cards-container">
          {selectedCategory && (
            filterCardsByCategory(selectedCategory).map((card) => (
              <div
                style={{ margin: "0 auto" }}
                key={card.id}
                className="product-card"
              >
                <img src={card.url} alt="clothes image number 1" width="280px" height="180px" />
                <h4 style={{ textAlign: "center" }}>{card.title}</h4>
                <br />
                <p>{card.description}</p>
                <br />
                <p>{card.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;