import styled from 'styled-components';
import { shade } from 'polished';


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

export const Form = styled.form`
    margin-top: 40px;
    max-width: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    button {
        width: 300px;
        height: 120px;
        background: #CCF49F;
        border-radius: 20px;
        border: 1px solid ${shade(0.2, '#CCF49F')};
        color: #000;
        font-weight: bold;
        transition: background-color 0.2s;
        margin-top: 40px;

        &:hover {
            background: ${shade(0.2, '#CCF49F')};
        }
    }
`;
