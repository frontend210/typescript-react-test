import moment from 'moment';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { GithubIssue } from '../../api/github-events.model';
import * as s from './IssueTitle.style';

interface Props {
    issue: GithubIssue;
}

const IssueTitle: React.FC<Props> = ({ issue }) => {
    console.log(issue)
    return (
        <>
            <s.TitleP>{issue.title}</s.TitleP>
            <s.MetaDataDiv>
                By <s.UsernameSpan>{issue.user.login}</s.UsernameSpan> •{' '}
                <span data-tip={moment(issue.created_at).format('D  MMM YYYY mm:ss')}>
                    {moment(issue.created_at).fromNow()}
                </span>
                <ReactTooltip place="top" type="dark" effect="solid" />
            </s.MetaDataDiv>
        </>
    );
};

export default IssueTitle;
