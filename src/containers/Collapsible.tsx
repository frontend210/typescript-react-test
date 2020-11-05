import React, { useState } from 'react';
import * as s from './Collapsible.style';

interface Props {
    commentNumber: number;
}

const Collapsible: React.FC<Props> = ({ children, commentNumber }) => {
    const [collapsed, setCollapsed] = useState(true);
    const expandCollapse = collapsed
        ? `${commentNumber} comments • Expand issue`
        : 'Collapse issue';

    return (
        <>
            <s.ChildrenContainer collapsed={collapsed}>{children}</s.ChildrenContainer>
            <s.Shadow collapsed={collapsed}>
                <s.CollapsibleLabel
                    collapsed={collapsed}
                    onClick={() => setCollapsed(state => !state)}
                >
                    {expandCollapse}
                </s.CollapsibleLabel>
            </s.Shadow>
        </>
    );
};

export default Collapsible;
