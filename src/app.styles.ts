import styled from "styled-components";

export const container = styled.div`
    @font-face {
        font-family: 'IBM Plex Serif';
        src: url('IBMPlexSerif-Regular.ttf') format('truetype');
    }
    font-family: 'IBM Plex Serif';
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const header = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 32px;
    color: #0A235C;
`;

export const issuer_title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #008080;
`;

export const comment_body = styled.div`
  font-size: 20px;
  margin-bottom: 32px;
  margin-left: 64px;
  color: #0A235C;
`;

