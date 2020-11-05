import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.input`
    border-color: #a1a1a1;
    border-style: solid;
    width: 379px;
    height: 48px;
    border-radius: 8px;
    box-shadow: 0px 8px 16px -8px #a6a6a6;

    font-size: 16px;
    color: #0a235c;

    :focus {
        border-color: #23b5b5;
    }
`;

export const SlashSpan = styled.span`
    font-size: 24px;
`;

export const SubmitButtonInput = styled.input`
    background-color: teal;
    border-radius: 8px;
    height: 48px;
    width: 140px;
    box-shadow: 0px 8px 16px -8px teal;
    border-color: teal;
    border-style: solid;
    color: #ffffff;
    cursor: pointer;
`;
