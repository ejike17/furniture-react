import React from 'react';
import pay1 from "../../images/pay_1.png"
import pay2 from "../../images/pay_2.png"
import pay3 from "../../images/pay_3.png"
import pay4 from "../../images/pay_4.png"
import pay5 from "../../images/pay_5.png"

function DarkFooter() {
    return <div className='footer-end bg-dark'>
      <div className = "container grid">
                    <p className = "text text-white text-center">&copy; Copyright 2021. All Right Reserved. Designed and Developed by Kawsar Ahmed</p>
                    <div className = "flex payment">
                        <img src = {pay1} />
                        <img src = {pay2} />
                        <img src = {pay3}/>
                        <img src = {pay4} />
                        <img src = {pay5} />
                    </div>
                </div>
  </div>;
}

export default DarkFooter;
