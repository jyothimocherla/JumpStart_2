import React from 'react';
import {Link} from 'react-router';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div id="homepage-container">
        <div id="homepage-background-container">
            <img id="homepage-background-image" src={require('../../imgs/coffe_bkgd.jpg')} />
        </div>

        <div id="homepage-background-text-container">
            <h3>JUMPSTART your business!</h3>
            <br/>
            <ul>
                <li>
                    Learn valuable skills on how to improve your business.
                </li>
                <li>
                    Watch a few minutes of video to save you hours.
                </li>
                <li>
                    Earn discounts on each video you watch.
                </li>
            </ul>
        </div>

        <div id="homepage-perks-container">
            <div className="homepage-perk">
                <img className="homepage-perk-image" src={require('../../imgs/multiple.png')} />
                <div><span>Jumpstart users report a 50% increase in customer retention</span></div>
            </div>

            <div className="homepage-perk">
                <img className="homepage-perk-image" src={require('../../imgs/piggy.png')} />
                <div><span>Using Jumpstart could save you up to $45 per week</span></div>
            </div>

            <div className="homepage-perk">
                <img className="homepage-perk-image" src={require('../../imgs/time.png')} />
                <div><span>Jumpstart users spend an hour less each day figuring out new technology</span></div>
            </div>
        </div>

        <div className="homepage-video">
            <Link to="email-marketing"><img src={require('../../imgs/HomeVideo1.png')}/></Link>
            <img src={require('../../imgs/HomeVideo2.png')}/>
        </div>

        <div className="homepage-video">
            <img src={require('../../imgs/HomeVideo3.png')}/>
            <img src={require('../../imgs/HomeVideo4.png')}/>
        </div>

        <div className="homepage-video">
            <img src={require('../../imgs/HomeVideo5.png')}/>
            <img src={require('../../imgs/HomeVideo6.png')}/>
        </div>

        <div id="homepage-testimonials">
            <img id="homepage-team-image" src={require('../../imgs/team.png')} />
            <div id="homepage-testimonials-text"><span style={{color:'green'}}>Read</span> what Jumpstart users have to say about these tutorials that have helped theri businesses grow.</div>
        </div>
    </div>
  );
};

export default HomePage;
