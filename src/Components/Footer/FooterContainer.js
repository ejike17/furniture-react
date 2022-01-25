import React from 'react';

function FooterContainer() {
    return <div className='container'>
      <div className = "footer-content py grid text-center">
                    <div className = "footer-item">
                        <h3>Furnish.com</h3>
                        <p className = "text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem consequuntur saepe tenetur deserunt harum error quae sint voluptas sunt, autem, totam amet officiis nesciunt eos cupiditate ipsa!</p>
                        <ul className = "social-links flex">
                            <li>
                                <a href = "#" className = "flex"><i className = "fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href = "#" className = "flex"><i className = "fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href = "#" className = "flex"><i className = "fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href = "#" className = "flex"><i className = "fab fa-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div className = "footer-item">
                        <h3>Contact Us</h3>
                        <p className = "text">1203, Falke Street, Drive FL 5766, LA, USA</p>
                        <p className = "text">Phone: +474 (4657) 2000</p>
                        <p className = "text">Email: info@furnish.com</p>
                    </div>

                    <div className = "footer-item">
                        <h3>Recent Post</h3>
                        <ul>
                            <li className = "text"><a href = "#">Rooms decoration package</a></li>
                            <li className = "text"><a href = "#">Dinning Materials</a></li>
                            <li className = "text"><a href = "#">Event Furniture</a></li>
                        </ul>
                    </div>

                    <div className = "footer-item">
                        <h3>Our Portfolio</h3>
                        <ul>
                            <li className = "text"><a href = "#">EFTA Design</a></li>
                            <li className = "text"><a href = "#">County Hall Decoration</a></li>
                            <li className = "text"><a href = "#">SOO Conference</a></li>
                            <li className = "text"><a href = "#">LA Events</a></li>
                        </ul>
                    </div>
                </div>
  </div>;
}

export default FooterContainer;
