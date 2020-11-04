
export type GithubUser = {
    id: number
    login: string
}

export type GithubComment = {
    id: number
    created_at: string
    user: GithubUser
    body: string
}

export type GithubEvent = {
    id: string
    type: string
    actor: GithubUser
    created_at: string
    payload: {
        issue: {
            id: number
            created_at: string
            user: GithubUser
            title: string
            body: string
        }
        comment: GithubComment
    }
}

export type GithubIssue = {
    id: number
    created_at: string
    user: GithubUser
    title: string
    body: string
    comments: GithubComment[]
}
