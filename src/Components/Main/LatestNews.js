import React from "react";
import author1 from "../../images/author-1.jpg"
import author2 from "../../images/author-2.jpg"
import author3 from "../../images/author-3.jpg"
import latestnews from "../../images/latest_news_img_1.png" 

function LatestNews() {
  return (
    <div
      className="latest-news bg-light-grey-color-shade py"
      id="latest-news"
    >
      <div className="container">
        <div className="section-title text-center">
          <h2>latest news</h2>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="line"></div>
        </div>

        <div className="latest-news-content grid">
          <article className="latest-news-item bg-white">
            <div className="top">
              <img src={ latestnews}/>
              <div className="author">
                <img src={author1} />
              </div>
            </div>
            <div className="body">
              <span className="date">Posted October 8, 2021</span>
              <h3 className="title text-uppercase">cheap budget hotel rooms</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veritatis <span>...</span>
              </p>
            </div>
            <div className="bottom" k>
              <a href="#" className="text-uppercase">
                read more
              </a>
            </div>
          </article>

          <article className="latest-news-item bg-white">
            <div className="top">
              <img src={author2} />
              <div className="author">
                <img src={author2} />
              </div>
            </div>
            <div className="body">
              <span className="date">Posted October 8, 2021</span>
              <h3 className="title text-uppercase">cheap budget hotel rooms</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veritatis <span>...</span>
              </p>
            </div>
            <div className="bottom" k>
              <a href="#" className="text-uppercase">
                read more
              </a>
            </div>
          </article>

          <article className="latest-news-item bg-white">
            <div className="top">
              <img src={author3} />
              <div className="author">
                <img src={author3} />
              </div>
            </div>
            <div className="body">
              <span className="date">Posted October 8, 2021</span>
              <h3 className="title text-uppercase">cheap budget hotel rooms</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                veritatis <span>...</span>
              </p>
            </div>
            <div className="bottom" k>
              <a href="#" className="text-uppercase">
                read more
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
