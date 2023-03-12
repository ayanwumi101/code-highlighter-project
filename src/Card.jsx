import React from 'react'
import './card.css'

const Card = () => {
    return (
        <div>
            {/* <h1 className="title">Find the best Plan for you</h1>
            <form className="flex flex_form">
                <label for="monthly">
                    <input type="radio" name="bill" id="monthly" />
                    Billed monthly
                </label>
                <label for="yearly">
                    <input type="radio" name="bill" id="yearly" />
                    Billed yearly
                </label>
            </form> */}
            <div className="flex flex_container">

                <div className="flex_container_content">
                    <p className="value"><b>Standard</b></p>
                    <h1>9 Eur</h1>
                    <span className="about">pre person, per month</span>

                    <h4>Top features:</h4>
                    <ul>
                        <li>Unlimited Search</li>
                        <li>10 apps</li>
                        <li>Group calls</li>
                    </ul>

                    <button>Try for free</button>
                    <a href="#">Learn more</a>
                </div>

                <div className="flex_container_content">
                    <p className="value"><b>Advanced</b></p>
                    <h1>15 Eur</h1>
                    <span className="about">pre person, per month</span>

                    <h4>Top features:</h4>
                    <ul>
                        <li>Advance admin control</li>
                        <li>Domain Verification</li>
                        <li>Messge exports</li>
                    </ul>

                    <button className="bg-dark">Try for free</button>
                    <a href="#">Learn more</a>
                </div>

                <div className="flex_container_content">
                    <p className="value"><b>Enterprise</b></p>
                    <h1>36 Eur</h1>
                    <span className="about">pre person, per month</span>

                    <h4>Top features:</h4>
                    <ul>
                        <li>Unlimited workspace</li>
                        <li>Data loss prevention</li>
                        <li>Network control</li>
                    </ul>

                    <button>Contact sales</button>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Card