import React from "react";
import newp_img1 from "../../images/new_product_img_1.png"
import newp_img2 from "../../images/new_product_img_2.png"
import newp_img3 from "../../images/new_product_img_3.png"
import newp_img4 from "../../images/new_product_img_4.png"

function NewProducts() {
  return (
    <div id="new-products" className="new-products py bg-light-grey-color-shade">
      <div className="container">
        <div className="section-title text-center">
          <h2>top new products</h2>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className="line"></div>
        </div>

        <div className="new-products-content grid">
          <div className="new-product-item">
            <div className="image">
              <img src={newp_img1} alt="" />
              <span className="badge bg-brown text-white text-center text-uppercase">
                sale
              </span>
            </div>
            <div className="info">
              <div className="ratings text-grey">
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <span>(10 Reviews)</span>
              </div>
              <p className="name">Decor For Drawing Room</p>
              <div className="price">
                <span className="old text-grey">$ 50.00</span>
                <span className="new text-brown">$ 35.00</span>
              </div>
            </div>
          </div>

          <div className="new-product-item">
            <div className="image">
              <img src={newp_img2} alt="" />
              <span className="badge bg-brown text-white text-center text-uppercase">
                sale
              </span>
            </div>
            <div className="info">
              <div className="ratings text-grey">
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <span>(10 Reviews)</span>
              </div>
              <p className="name">Decor For Drawing Room</p>
              <div className="price">
                <span className="old text-grey">$ 50.00</span>
                <span className="new text-brown">$ 35.00</span>
              </div>
            </div>
          </div>

          <div className="new-product-item">
            <div className="image">
              <img src={newp_img3} alt="" />
              <span className="badge bg-brown text-white text-center text-uppercase">
                sale
              </span>
            </div>
            <div className="info">
              <div className="ratings text-grey">
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <span>(10 Reviews)</span>
              </div>
              <p className="name">Decor For Drawing Room</p>
              <div className="price">
                <span className="old text-grey">$ 50.00</span>
                <span className="new text-brown">$ 35.00</span>
              </div>
            </div>
          </div>

          <div className="new-product-item">
            <div className="image">
              <img src={newp_img4} alt="" />
              <span className="badge bg-brown text-white text-center text-uppercase">
                sale
              </span>
            </div>
            <div className="info">
              <div className="ratings text-grey">
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-brown"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <i className="fas fa-star text-light-grey"></i>
                <span>(10 Reviews)</span>
              </div>
              <p className="name">Decor For Drawing Room</p>
              <div className="price">
                <span className="old text-grey">$ 50.00</span>
                <span className="new text-brown">$ 35.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
