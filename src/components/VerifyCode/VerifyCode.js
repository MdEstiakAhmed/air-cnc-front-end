import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactCodeInput from 'react-verification-code-input';

const VerifyCode = ({getVerifyCode}) => {
    const [code, setCode] = useState(null)
    return (
        <div>
             <ReactCodeInput  onComplete={val => setCode(val)} />
             <Button className="search-btn gradient-button shadow-none border-0 p-3" onClick={()=> getVerifyCode(code)}> 
                "Verify me"
            </Button>
        </div>
    );
};

export default VerifyCode;