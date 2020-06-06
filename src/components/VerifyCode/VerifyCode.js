import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactCodeInput from 'react-verification-code-input';

const VerifyCode = (props) => {
    const [code, setCode] = useState(null)

    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Enter Your Verification Code
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <ReactCodeInput  onComplete={val => setCode(val)} />
        </Modal.Body>
        <Modal.Footer>
            <Button className="btn border-0 gradient-button shadow-none" onClick={()=> props.getVerifyCode(code) && props.onHide}>Verify</Button>
        </Modal.Footer>
        </Modal>
    );
};

export default VerifyCode;