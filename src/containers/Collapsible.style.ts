import styled from 'styled-components';

interface Collapse {
    collapsed: boolean;
}

export const ChildrenContainer = styled.div<Collapse>`
    display: block;
    overflow: hidden;
    height: ${p => (p.collapsed ? '73px' : undefined)};
`;

export const CollapsibleLabel = styled.div<Collapse>`
    background-color: #fff;
    margin-top: ${p => (p.collapsed ? '-12px' : '15px')};
    border-radius: 20px;
    text-align: center;
    width: 250px;
    color: #23b5b5;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`;

export const Shadow = styled.span<Collapse>`
    height: 20px;
    box-shadow: ${p => (p.collapsed ? '0px -10px 20px -8px rgba(10, 35, 92, 0.35)' : undefined)};
    display: flex;
    justify-content: center;
`;
