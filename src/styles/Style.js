import styled from "styled-components";
import bg from "../image/bg.png";

export const AlineCentre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    widht: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px;
    background-color: white;
    width: 400px;
    border-radius: 24px;
    font-family: "Roboto";
    font-style: normal;

    h1 {
        text-align: center;
        font-size: 24px;
        color: #424242;
    }
    p {
        text-align: left;
        font-size: 16px;
        padding-bottom: 7px;
        color: #424242;
    }
`;
