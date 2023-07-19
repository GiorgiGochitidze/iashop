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
        "ფეხსაცმელი",
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
    {
      name: "ბავშვი: ბიჭი",
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
      ],
    },

    {
      name: "ბავშვი: გოგო",
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
      ],
    },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("ყველა პროდუქტი");
  const [showSubcategoryList, setShowSubcategoryList] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCheckActive = (categoryName, subcategoryName) => {
    if (subcategoryName) {
      setSelectedSubcategory(subcategoryName);
    } else {
      setSelectedCategory(categoryName);
      setShowSubcategoryList(true);
      setSelectedSubcategory(null);
    }
  };

  const filterCardsByCategory = (categoryName, subcategoryName) => {
    if (categoryName === "ყველა პროდუქტი") {
      return filteredCards;
    }

    return filteredCards.filter((card) => {
      const hasCategory = card.title.includes(categoryName);
      const hasSubcategory =
        card.title.includes(subcategoryName) ||
        card.description.includes(subcategoryName);
      return hasCategory && hasSubcategory;
    });
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
                  color:
                    selectedCategory === category.name
                      ? "rgb(188, 35, 188)"
                      : "black",
                  fontWeight:
                    selectedCategory === category.name ? "bold" : "normal",

                }}
              >
                {category.name}
              </p>
              {selectedCategory === category.name &&
                category.subcategories.length > 0 && (
                  <div style={{ marginLeft: "20px" }}>
                    {category.subcategories.map((subcategory, subIndex) => (
                      <p
                        style={{
                          textAlign: "center",
                          color:
                            selectedCategory === category.name &&
                            selectedSubcategory === subcategory
                              ? "rgb(220, 74, 220)" // Color for selected subcategory
                              : "black",
                          fontWeight:
                            selectedCategory === category.name &&
                            selectedSubcategory === subcategory
                              ? "bold" // Font weight for selected subcategory
                              : "normal",
                        }}
                        key={subIndex}
                        onClick={() =>
                          handleCheckActive(category.name, subcategory)
                        }
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
          {selectedCategory
            ? filterCardsByCategory(selectedCategory, selectedSubcategory).map(
                (card) => (
                  <div
                    style={{ margin: "0 auto" }}
                    key={card.id}
                    className="productses-card"
                  >
                    <img
                      src={card.url}
                      alt="clothes image number 1"
                      width="280px"
                      height="180px"
                    />
                    <h4 style={{ textAlign: "center" }}>{card.title}</h4>
                    <br />
                    <p>{card.description}</p>
                    <br />
                    <p>{card.price}</p>
                  </div>
                )
              )
            : filteredCards.map((card) => (
                <div
                  style={{ margin: "0 auto" }}
                  key={card.id}
                  className="product-card"
                >
                  <img
                    src={card.url}
                    alt="clothes image number 1"
                    width="280px"
                    height="180px"
                  />
                  <h4 style={{ textAlign: "center" }}>{card.title}</h4>
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
