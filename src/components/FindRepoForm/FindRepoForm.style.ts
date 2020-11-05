import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    @font-face {
        font-family: 'IBM Plex Sans';
        src: url('IBMPlexSerif-Regular.ttf') format('truetype');
    }
`;

export const Input = styled.input`
    width: 379px;
    height: 48px;
    border: 1px solid #a1a1a1;
    border-radius: 8px;
    box-shadow: 0px 8px 16px -8px #a6a6a6;
    font-size: 16px;
    color: #0a235c;
    padding: 0px 8px;

    :focus {
        border-color: #23b5b5;
        outline: none;
    }
`;

export const SlashSpan = styled.span`
    font-size: 24px;
`;

export const SubmitButtonInput = styled.input`
    background-color: teal;
    height: 48px;
    width: 140px;
    border: 1px solid teal;
    border-radius: 8px;
    box-shadow: 0px 8px 16px -8px teal;
    color: #ffffff;
    cursor: pointer;
    font-weight: 500;
    font-size: 16;
    
    :hover {
        box-shadow: 0px 8px 6px -8px teal;
    }
    :focus {
        outline: none;
    }
`;
