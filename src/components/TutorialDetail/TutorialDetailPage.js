import React, {PropTypes} from 'react';
import ProgressBar from '../common/ProgressBarSection';
import '../../styles/TutorialDetailPage.css';
import {Link} from 'react-router';

const TutorialDetailPage = () => {
    return (
        <div id="detail-page-container">
            <div id="detail-background-container">
                <img id="detail-background-image" src={require('../../../imgs/bkgd.jpg')} />

                <div id="detail-background-text-container">
                    <h1>Get the email marketing expertise you need.</h1>
                    <br/>
                    <h2>Learn the easiest way to</h2>
                    <ul>
                        <li>
                            Attract new customers
                        </li>
                        <li>
                            Grow your mailing list
                        </li>
                        <li>
                            Keep clients satisfied
                        </li>
                    </ul>
                </div>
            </div>

            <div id="detail-page-perks-container">
                <div className="detail-page-perk">
                    <img className="detail-page-perk-image" src={require('../../../imgs/dollar.png')} />
                    <div><span>Make $43 for every $1 spent</span></div>
                </div>

                <div className="detail-page-perk">
                    <img className="detail-page-perk-image" src={require('../../../imgs/command.png')} />
                    <div><span>91% of consumers check their email at least once a day</span></div>
                </div>

                <div className="detail-page-perk">
                    <img className="detail-page-perk-image" src={require('../../../imgs/message.png')} />
                    <div><span>Email is 40 times better than Facebook & Twitter at acquiring customers</span></div>
                </div>
            </div>

            <ProgressBar
                now={23}
                text="Hey Mark! You've earned 15 credits so far. Learn more, unlock more!"
            />

            <div id="detail-page-section1">
                <span style={{color: 'green'}}>Earn 15 credits</span> with each additional tutorial completed!
                <div id="detail-page-section1-videos">
                    <img src={require('../../../imgs/screen2video1.png')} />
                    <img src={require('../../../imgs/screen2video2.png')} />
                    <img src={require('../../../imgs/Screen1video3.png')} />
                </div>
            </div>

            <div id="detail-page-section2">
                <span>How can GoDaddy help you with this?</span>
                <div id="detail-page-section2-videos">
                    <Link to="email-marketing/tutorials">
                        <img src={require('../../../imgs/Screen1video4.png')} />
                    </Link>
                    <img src={require('../../../imgs/screen1video5.png')} />
                </div>
            </div>

            <div id="detail-page-sell">
                <span>Visit the GoDaddy Email Marketing page to learn more about the deals you can find!</span>
                <div id="detail-page-calltoaction">
                    Get GoDaddy Email Marketing
                </div>
            </div>

        </div>
    );
};

TutorialDetailPage.propTypes = {

};

export default TutorialDetailPage;
