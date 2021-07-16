import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps{
    hasError: boolean;
}

export const Header = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    height: 60px;
    background-color: #FFF;
    border-bottom: 2px solid ${shade(0.2, '#CCF49F')};

    img{
        width: 45px;
        height: 45px;
        margin-left: 30px;
        margin-top: 10px;
    }

    h1{
        font: 20px Roboto slab;
        font-weight: 600;
        color: #3a3a3a;
        max-width: 300px;
        margin: 17px;
    }

`;

export const Title = styled.h1`
    font-size: 50px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
    margin-left: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    margin-left: 80px;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 1px solid ${shade(0.2, '#CCF49F')};
        border-radius: 20px 0 0 20px;
        color: #3a3a3a;

        
        border: 2px solid #fff;
        border-right: 0;
        ${props =>props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 200px;
        height: 70px;
        background: #CCF49F;
        border-radius:0 20px 20px 0;
        border: 1px solid ${shade(0.2, '#CCF49F')};
        color: #000;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, '#CCF49F')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin: 8px 0px 0px 85px;

`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 80px;
    flex-wrap: wrap;
    

    a {
        background: #fff;
        border-radius: 5px;
        width: 280px;
        padding: 24px;
        text-decoration: none;
        display: flex;
        align-items: center;
        trasition: transform 0.2s;
        margin-right: 30px;
        margin-top: 30px;

        &:hover {
            transform: translate(10px);
        }

        div {
            margin: 0 16px;
            flex: 1;
            strong {
                font-size: 18px;
                color: #3d3d4d;
            }

            p {
                font-size: 16px;
                color: #3d3d4d;
                margin-top: 4px;
                font-weight: 200;
            }
        }
    }

`;
