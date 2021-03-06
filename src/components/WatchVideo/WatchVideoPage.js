import React, {PropTypes} from 'react';
import '../../styles/WatchVideoPage.css';
import ProgressBar from '../common/ProgressBarSection';

const WatchVideoPage = ({openModal}) => {

    return (
        <div>
            <ProgressBar
                text="Hey Mark! You've have achieved a total of 23 credits. Learn more, unlock more!"
                now={23}
            />
            <div id="page">
                <iframe
                    id="mainVideo"
                    width="854"
                    height="480"
                    src="https://www.youtube.com/embed/zPDr-ccIIYw">
                </iframe>

                <div id="images">
                    <img
                        className="watch-video-images"
                        src={require('../../../imgs/womanTyping.jpg')}
                    />
                    <img
                        className="watch-video-images"
                        src={require('../../../imgs/moreCustomers.png')}
                    />
                    <img
                        className="watch-video-images"
                        src={require('../../../imgs/dosAndDonts.png')}
                    />
                    <img
                        className="watch-video-images"
                        src={require('../../../imgs/GDHelp.png')}
                    />

                    <input
                        type="image"
                        className="watch-video-images"
                        src={require('../../../imgs/shea.jpg')}
                        onClick={openModal}
                    />
                </div>
            </div>

            <img id="greyCircleBack" src={require('../../../imgs/greyCircle.png')}/>
            <img id="back" src={require('../../../imgs/back.png')}/>

            <img id="greyCircleForward" src={require('../../../imgs/greyCircle.png')}/>
            <img id="forward" src={require('../../../imgs/forward.png')}/>
        </div>
    );
};

WatchVideoPage.propTypes = {
    openModal: PropTypes.func.isRequired
};

export default WatchVideoPage;
