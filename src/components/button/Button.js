import React from "react";
import styled from "styled-components";

const ButtonS = styled.button`
    background-color: #03a9f4;
    border: 2px solid #2196f3;
    color: #fff;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    :hover{
        background-color: #2196f3;
        border-color: #03a9f4;
    }
` 

const Button = ({children, onClick}) => {
    return (
        <ButtonS onClick={onClick}>
            {children}
        </ButtonS>
    )
}

export default Button