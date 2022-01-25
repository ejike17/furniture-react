import React from "react";
import quote from "../../images/quote-icon-dark.png"
import client from "../../images/client-1.jpg"
import quote1 from "../../images/quote-icon.png"
import client2 from "../../images/client-2.jpg"
import quote3 from "../../images/quote-icon-dark.png"
import client3 from "../../images/client-3.jpg"

function Feedback() {

    const feedbackItems = document.querySelectorAll('.feedback-item');
const feedbackBtns = document.querySelectorAll('.feedback-btn');
const feedbackDisplay = document.querySelector('#feedback-display');

let activeId = 1;
changeFeedback(activeId);
function changeFeedback(id){
    feedbackItems.forEach((item) => {
        if(id == item.dataset.id){
            // swapping data id
            [feedbackDisplay.dataset.id, item.dataset.id] = [item.dataset.id, feedbackDisplay.dataset.id];
            // swapping the innder content
            [feedbackDisplay.innerHTML, item.innerHTML] = [item.innerHTML, feedbackDisplay.innerHTML];
            // swapping quote image
            [feedbackDisplay.querySelector('img').src, item.querySelector('img').src] = [item.querySelector('img').src, feedbackDisplay.querySelector('img').src];
        }
    });
}

feedbackBtns.forEach((btn, index) =>{
    btn.addEventListener('click', () => {
        activeId = index + 1;
        feedbackBtnReset();
        btn.classList.add('feedback-active-btn');
        changeFeedback(activeId);
    });
});

function feedbackBtnReset(){
    feedbackBtns.forEach((btn) => {
        btn.classList.remove('feedback-active-btn');
    });

    
  }
  return (
    <div className="feedback py bg-light-grey-color-shade" id="feedback">
      <div className="container" >
        <div className="section-title text-center">
          <h2>Feedback</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="line"></div>
        </div>

        <div className="feedback-inner">
          <div className="feedback-container grid">
            <div className="feedback-item bg-white text-center" data-id="1" onClick={changeFeedback(parseInt("1"))}>
              <img src={quote} className="quote-icon" />
              <p className="text text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                corporis delectus, eaque consectetur ullam rerum?
              </p>
              <div className="client">
                <img src={client} />
              </div>
            </div>

            <div
              className="feedback-item bg-white text-center"
              data-id="2"
              id="feedback-display"
              onClick={changeFeedback(parseInt("2"))}
            >
              <img src={quote1} className="quote-icon" />
              <p className="text text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                corporis delectus, eaque consectetur ullam rerum?
              </p>
              <div className="client">
                <img src={client2} />
              </div>
            </div>

            <div className="feedback-item bg-white text-center" data-id="3" onClick={changeFeedback(parseInt("3"))}>
              <img src={quote3} className="quote-icon" />
              <p className="text text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                corporis delectus, eaque consectetur ullam rerum?
              </p>
              <div className="client">
                <img src={client3} />
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-btns flex">
          <button className="feedback-btn feedback-active-btn"></button>
          <button className="feedback-btn"></button>
          <button className="feedback-btn"></button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
