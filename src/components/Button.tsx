import React from "react";
import styled from "styled-components";

interface buttonProps {
    label: string;
    href: string;
}
const ButtonContainer = styled.a`
    background-color: #6DAD19;
    color: #ffffff;
    padding: 5px;
    border: 2px solid #333333;
    border-radius: 6px;
    text-decoration: none;
`
export const Button = (props: buttonProps) => {
    return (
        <ButtonContainer href={props.href}>{props.label}</ButtonContainer>
    )
};