import React from 'react';

function Navigation1() {
    return (
        <div className="toggler-and-category bg-brown text-white flex">
        <button type="button" className="btn navbar-show-btn text-white">
          <i className="fas fa-bars"></i>
        </button>
        <div className="category-list">
          <span>Category</span>
          <button type="button" className="btn category-toggler-btn text-white">
            <i className="fas fa-circle-arrow-down"></i>
          </button>
        </div>

        {/*  <!-- side navbar --> */}
        <ul id="side-navbar" className="bg-white text-uppercase">
          <button type="button" className="btn navbar-hide-btn text-dark">
            <i className="fas fa-times"></i>
          </button>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">featured</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        {/* <!-- end of side navbar --> */}

        <ul id="category-list-items" className="bg-white">
          <li>
            <a href="#">Small Furniture</a>
          </li>
          <li>
            <a href="#">NIghtstands</a>
          </li>
          <li>
            <a href="#">Dressers</a>
          </li>
          <li>
            <a href="#">Bookcase</a>
          </li>
          <li>
            <a href="#">Coffee Tables</a>
          </li>
          <li>
            <a href="#">Mattresses</a>
          </li>
          <li>
            <a href="#">Sofas</a>
          </li>
          <li>
            <a href="#">Chairs</a>
          </li>
          <li>
            <a href="#">Hall Trees</a>
          </li>
          <li>
            <a href="#">Furniture Stores</a>
          </li>
        </ul>
      </div>
    )
}

export default Navigation1;
