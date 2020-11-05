import moment from 'moment';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GithubIssue } from '../../api/github-events.model';
import Collapsible from './../../containers/Collapsible';
import * as s from './Issue.style';
import ReactTooltip from "react-tooltip";

interface Props {
    issue: GithubIssue;
}

const Issue: React.FC<Props> = ({ issue }) => {
    return (
        <Collapsible key={issue.id} commentNumber={issue.comments.length}>
            <ReactMarkdown>{issue.body}</ReactMarkdown>
            <s.CommentNumberP>{issue.comments.length} comments</s.CommentNumberP>
            {issue.comments.map(comment => (
                <s.CommentContainerDiv key={comment.id}>
                    <s.CommentHeaderP>
                        By {comment.user.login} • {' '}
                        <span data-tip={moment(comment.created_at).format('D  MMM YYYY mm:ss')}>
                            {moment(comment.created_at).fromNow()}
                        </span>
                        <ReactTooltip place="top" effect="solid" type="dark"/>
                    </s.CommentHeaderP>

                    <s.CommentBody>{comment.body}</s.CommentBody>
                </s.CommentContainerDiv>
            ))}
        </Collapsible>
    );
};

export default Issue;
