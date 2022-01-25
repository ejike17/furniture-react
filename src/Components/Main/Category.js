import React from "react";
import category1 from "../../images/category_img_1.png";
import category2 from "../../images/category_img_2.png";
import category3 from "../../images/category_img_3.png";
import category4 from "../../images/category_img_4.png";
import category5 from "../../images/category_img_5.png";
import category6 from "../../images/category_img_6.png";

function Category() {
    function category() {
    const categoryItems = document.getElementById("category-list-items");
    const categoryTogglerBtn = document.querySelector(".category-toggler-btn");
    categoryTogglerBtn.addEventListener("click", () => {
      categoryItems.classList.toggle("show-category-items");

      if (categoryItems.classList.contains("show-category-items")) {
        categoryTogglerBtn.querySelector("i").className =
          "fas fa-circle-arrow-up";
      } else {
        categoryTogglerBtn.querySelector("i").className =
          "fas fa-circle-arrow-down";
      }
    });
  }
  return (
    <div className="category py bg-light-brown" id="category" onClick={category}>
      <div className="container">
        <div className="category-content grid">
          <div className="category-item">
            <img src={category1} />
            <div className="category-badge bg-white text-dark flex">
              Sofa Set
            </div>
          </div>
          <div className="category-item">
            <img src={category2} />
            <div className="category-badge bg-white text-dark flex">
              Sofa Set
            </div>
          </div>
          <div className="category-item">
            <img src={category3} />
            <div className="category-badge bg-white text-dark flex">
              Sofa Set
            </div>
          </div>
          <div className="category-item">
            <img src={category4} />
            <div className="category-badge bg-white text-dark flex">
              Sofa Set
            </div>
          </div>
          <div className="category-item">
            <img src={category5} />
            <div className="category-badge bg-white text-dark flex">
              Sofa Set
            </div>
          </div>
          <div className="category-item">
            <img src={category6} />
            <div className="category-badge bg-white text-dark flex">
              Sofa Set
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
