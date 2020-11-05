import React, { FormEvent, useState } from 'react';
import * as s from './FindRepoForm.style';

interface Props {
    submit: (user: string, repo: string) => void;
    initialFormState: {
        user: string,
        repo: string
    };
}

const FindRepoForm: React.FC<Props> = ({ submit, initialFormState }) => {
    const [user, setUser] = useState(initialFormState.user);
    const [repo, setRepo] = useState(initialFormState.repo);

    const onSubmit = async (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        submit(user, repo);
    };

    return (
        <s.Form onSubmit={onSubmit}>
            <s.Input
                type="text"
                placeholder="user"
                value={user}
                onChange={event => setUser(event.target.value)}
            />
            <s.SlashSpan>/</s.SlashSpan>
            <s.Input
                type="text"
                placeholder="repo"
                value={repo}
                onChange={event => setRepo(event.target.value)}
            />
            <s.SubmitButtonInput type="submit" value="Go fetch"/>
        </s.Form>
    );
};

export default FindRepoForm;
