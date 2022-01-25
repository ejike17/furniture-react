import React from 'react';
import featured1 from "../../images/featured_deals_img_1.png"
import featured2 from "../../images/featured_deals_img_2.png"
import featured3 from "../../images/featured_deals_img_3.png"
import featured4 from "../../images/featured_deals_img_4.png"

function Featured() {
    return (
        <div className="featured-deals bg-light-grey-color-shade py" id="featured-deals">
            <div className="container">
                <div className="section-title text-center">
                    <h2>featured deals</h2>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className="line"></div>
                </div>

                <div className="featured-deals-content grid">
                    <div className="featured-deals-item">
                        <div className="image">
                            <img src={featured1} />
                        </div>
                        <div className="info bg-white">
                            <div className="ratings text-grey">
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                            </div>
                            <p className="name">Decor For Drawing Room</p>
                            <div className="price">
                                <span className="old text-grey">$ 50.00</span>
                                <span className="new text-brown">$ 35.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="featured-deals-item">
                        <div className="image">
                            <img src={featured2} />
                        </div>
                        <div className="info bg-white">
                            <div className="ratings text-grey">
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                            </div>
                            <p className="name">Decor For Drawing Room</p>
                            <div className="price">
                                <span className="old text-grey">$ 50.00</span>
                                <span className="new text-brown">$ 35.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="featured-deals-item">
                        <div className="image">
                            <img src={featured3} />
                        </div>
                        <div className="info bg-white">
                            <div className="ratings text-grey">
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                            </div>
                            <p className="name">Decor For Drawing Room</p>
                            <div className="price">
                                <span className="old text-grey">$ 50.00</span>
                                <span className="new text-brown">$ 35.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="featured-deals-item">
                        <div className="image">
                            <img src={featured4} />
                        </div>
                        <div className="info bg-white">
                            <div className="ratings text-grey">
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
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
  )
}

export default Featured;
