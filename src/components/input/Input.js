import React from "react";
import styled from "styled-components";

const InputS = styled.input`
    font-size: 1.5rem;
    padding: .5rem 1rem;
    border-radius: 4px 0 0 4px;
    border: 2px solid #2196f3;
    border-right: none;
    color: #444;
`

const Input = ({onChange, value}) => {
    return (
        <InputS type='text' onChange={onChange} value={value} />
    );
}

export default Input