import React, { useState } from 'react';
import * as s from "./app.styles";
import {useGithubIssueComments} from "./api/github-events.api";
import ErrorDetails from "./components/error-details";
import {GithubIssue} from "./api/github-events.model";
import ReactMarkdown from 'react-markdown'

function App() {
    const initialFormState = { user: 'graycoreio', repo: 'daffodil' };
    const [form, setForm] = useState<{ user: string, repo: string }>(initialFormState);
    const { data, isLoading, isError, error } = useGithubIssueComments(form.user, form.repo);

    const [user, setUser] = useState<string>(initialFormState.user);
    const [repo, setRepo] = useState<string>(initialFormState.repo);

    const handleSubmit = (e: any) => {
        setForm({ user, repo });
    };

    const handleChange = (e: any) => {
        if (e.target.name === 'user') {
            setUser(e.target.value);
        }
        if (e.target.name === 'repo') {
            setRepo(e.target.value);
        }
    };

    if(isLoading) {
        return (
            <div>Loading ...</div>
        )
    }

    if(isError) {
        return (
            <ErrorDetails error={error}/>
        )
    }

    return (
        <s.container>
            <s.header>GitHub Issues and Comments</s.header>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" placeholder="user" value={user} onChange={handleChange}/>
                <input type="text" name="repo" placeholder="repo" value={repo} onChange={handleChange}/>
                <input type="submit" value="Go fetch" />
            </form>

            {data?.map((issue: GithubIssue) => (
                <div key={issue.id + issue.title}>
                    <s.issuer_title>{issue.title}</s.issuer_title>
                    <ReactMarkdown>{issue.body}</ReactMarkdown>
                    {issue.comments.map(comment =>
                        <s.comment_body key={comment.id}>
                            <div>{comment.created_at} {comment.user.login}:</div>
                            <ReactMarkdown>{comment.body}</ReactMarkdown>
                        </s.comment_body>
                    )}
                </div>
            ))}
        </s.container>
    );
}

export default App;
