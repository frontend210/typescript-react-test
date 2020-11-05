import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const CommentContainerDiv = styled.div`
    background-color: rgba(10, 35, 92, 0.05);
    border-radius: 8px;
`;

export const CommentHeaderP = styled.p`
    color: #0a235c;
    font-size: 16px;
    font-weight: 700;
    padding: 22px 24px 0px 24px;
`;

export const CommentBody = styled(ReactMarkdown)`
    color: #0a235c;
    font-size: 16px;
    padding: 0px 24px 20px 24px;
`;

export const CommentNumberP = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #008080;
`;
