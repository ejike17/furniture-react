import React from 'react';

function Newsletter() {
    return (
        <div className = "newsletter py bg-light-grey-color-shade" id = "newsletter">
                <div className = "container">
                    <div className = "section-title text-center">
                        <h2>Newsletter</h2>
                        <p className = "lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className = "line"></div>
                    </div>

                    <div className = "newsletter-content">
                        <form>
                            <div className = "input-group flex">
                                <input type = "email" className = "form-control bg-light-grey" />
                                <button type = "submit" className = "btn bg-dark text-white text-uppercase">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default Newsletter;
