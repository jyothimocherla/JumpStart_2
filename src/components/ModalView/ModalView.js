import React, {PropTypes} from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router';
import '../../styles/ModalView.css';

const ModalView = ({isOpen, closeModal}) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="ModalClass"
            overlayClassName="OverlayClass"
        >

            <div id="modal-header-area">
                <div id="modal-header-text">
                    <h2>Congratulations Mark! For GoDaddy email marketing  products, you've earned</h2>
                    <h1 style={{color:'green'}}>14% off</h1>
                </div>

                <div id="modal-actions">
                    <div className="modal-actionItem">
                        <img src={require('../../../imgs/telemarketer.png')} />
                        <div className="modal-actionbutton">
                            (408) 505-8877
                        </div>
                        <div className="modal-action-description">
                            Contact our Award Winning customer care for further support
                        </div>
                    </div>

                    <div className="modal-actionItem">
                        <img src={require('../../../imgs/message_logo.png')} />
                        <div className="modal-actionbutton">
                            Join Now for <strike>$6.99</strike> $5.99
                        </div>
                        <div className="modal-action-description">
                            Jump start your business with GoDaddy's Email Marketing platorm!
                        </div>
                    </div>


                </div>

                <div id="modal-footer">
                    <span>Want to know how to Jumpstart your business further?</span>
                    <Link to="/">
                        <div id="modal-keep-learning">
                            Keep Learning!
                        </div>
                    </Link>
                </div>

            </div>
        </Modal>
    );
};

ModalView.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalView;
