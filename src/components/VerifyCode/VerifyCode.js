import React from 'react';
import { Button } from 'react-bootstrap';
import ReactCodeInput from 'react-verification-code-input';

const VerifyCode = () => {
    return (
        <div>
             <ReactCodeInput />
             <Button className="search-btn gradient-button shadow-none border-0 p-3"> 
                "Verify me"
            </Button>
        </div>
    );
};

export default VerifyCode;