import React, {PropTypes} from 'react';
import ProgressBar from '../common/ProgressBarSection';
import '../../styles/TutorialDetailPage.css';

const TutorialDetailPage = () => {
    return (
        <div id="detail-page-container">
            <div id="detail-background-container">
                <img src={require('../../../imgs/bkgd.jpg')} />

                <div id="detail-background-text-container">
                    <h1>Get the email marketing expertise you need.</h1>
                    <br />
                    <h2>Learn the easiest way to</h2>
                    <br />
                    <ul>
                        <li>
                            Attract new customers.
                        </li>
                        <li>
                            Grow your mailing list.
                        </li>
                        <li>
                            Attract new customers.
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



        </div>
    );
};

TutorialDetailPage.propTypes = {

};

export default TutorialDetailPage;
