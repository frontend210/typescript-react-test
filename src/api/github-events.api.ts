import {GithubEvent, GithubIssue} from "./github-events.model";
import axios from "axios";
import {useQuery} from "react-query";

export function useGithubIssueComments(user: string, repo: string) {
    const url = `/networks/${user}/${repo}/events?per_page=100`
    return useQuery<GithubIssue[], Error>(url, () =>
        axios.get(url).then((res) => mapResult(res.data))
    )
}

export function oldMapResult(githubEvents: GithubEvent[]): GithubIssue[] {
    return (
        [
            {
                id: 1,
                created_at: "2020-10-20T07:50:43Z",
                title: "Issue title goes her",
                body: "## This is a H2 \r\n This is a regular paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum mattis nisi. Cras varius purus justo, id feugiat quam tempus at. Aenean consectetur eros sit amet sapien tincidunt, at interdum mi consectetur. Nulla imperdiet",
                user: {
                    id: 42,
                    login: "userhandlegoesher",
                },
                comments: [
                    {
                        id: 100,
                        created_at: "2020-10-20T07:50:43Z",
                        body: "Comment text goes here. And it goes on and on. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.\n",
                        user: {
                            id: 42,
                            login: "userhandlegoesher",
                        }
                    },
                ]
            },
            {
                id: 2,
                created_at: "2020-10-20T04:32:03Z",
                title: "Another issue title",
                body: "## This is a H2 \r\n This is a regular paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum mattis nisi. Cras varius purus justo, id feugiat quam tempus at. Aenean consectetur eros sit amet sapien tincidunt, at interdum mi consectetur. Nulla imperdiet",
                user: {
                    id: 42,
                    login: "userhandlegoesher",
                },
                comments: [
                    {
                        id: 201,
                        created_at: "2020-10-20T07:35:58Z",
                        body: "Comment text goes here. And it goes on and on. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.\n",
                        user: {
                            id: 42,
                            login: "userhandlegoesher",
                        }
                    },
                    {
                        id: 202,
                        created_at: "2020-10-20T07:32:12Z",
                        body: "Comment text goes here. And it goes on and on. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.\n",
                        user: {
                            id: 42,
                            login: "userhandlegoesher",
                        }
                    }
                ]
            },
            {
                id: 3,
                created_at: "2020-10-15T11:13:03Z",
                title: "This is an expanded issue",
                body: "## This is a H2 \r\n This is a regular paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum mattis nisi. Cras varius purus justo, id feugiat quam tempus at. Aenean consectetur eros sit amet sapien tincidunt, at interdum mi consectetur. Nulla imperdiet.\r\n\r\n" +
                      "### This is a H3 \r\n More lorem ipsum to fill the example. Aenean orci diam, pretium ut elit at, ultrices sollicitudin sapien. In sollicitudin ut nibh sit amet faucibus. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.\r\n\r\n" +
                      "* A list!\r\n" +
                      "* With list items.\r\n" +
                      "* And bullets.",
                user: {
                    id: 42,
                    login: "userhandlegoesher",
                },
                comments: [
                    {
                        id: 301,
                        created_at: "2020-10-20T07:27:56Z",
                        body: "Comment text goes here. And it goes on and on. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.\n",
                        user: {
                            id: 42,
                            login: "userhandlegoesher",
                        }
                    },
                    {
                        id: 302,
                        created_at: "2020-10-20T07:25:55Z",
                        body: "Comment text goes here. And it goes on and on. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.\n",
                        user: {
                            id: 42,
                            login: "userhandlegoesher",
                        }
                    },
                    {
                        id: 303,
                        created_at: "2020-10-20T05:43:15Z",
                        body: "Comment text goes here. And it goes on and on. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.\n",
                        user: {
                            id: 42,
                            login: "userhandlegoesher",
                        }
                    }
                ]
            },
        ]
    )
}

export function mapResult(githubEvents: GithubEvent[]): GithubIssue[] {
    // TODO:
    //   1. Remove the hardcoded data below
    //   2. Transform the GithubEvent[] data passed in as a parameter, to the expected GithubIssue[] return type
    //      Transformation guidelines:
    //      a. Filter the input data to contain only events of type `IssueCommentEvent`
    //      b. Transform the data from each GithubEvent to a GithubIssue as follows:
    //         GithubIssue.id = GithubEvent.payload.issue.id
    //         GithubIssue.created_at = GithubEvent.payload.issue.created_at
    //         GithubIssue.title = GithubEvent.payload.issue.title
    //         GithubIssue.body = GithubEvent.payload.issue.body
    //         GithubIssue.user.id = GithubEvent.payload.issue.user.id
    //         GithubIssue.user.login = GithubEvent.payload.issue.user.login
    //      d. Aggregate all the comments in the GithubEvent.payload.comment fields, into the GithubIssue.comments arrays, so
    //         that each GithubIssue contains an array of related comments.
    //         The mapping is as follows:
    //         GithubIssue.comments[n].id = GithubEvent.payload.comment.id
    //         GithubIssue.comments[n].created_at = GithubEvent.payload.comment.created_at
    //         GithubIssue.comments[n].body = GithubEvent.payload.comment.body
    //         GithubIssue.comments[n].user.id = GithubEvent.payload.comment.user.id
    //         GithubIssue.comments[n].user.login = GithubEvent.payload.comment.user.login
    //   5. Verify that all tests pass, by running `npm test`
    //   6. Once the tests pass, verify that the app runs in a browser by running `npm start`
    //      Note that the data will look different in the browser, as the browser will render live data from Github.

    let commentEvents = githubEvents
        .filter(el => el.type === 'IssueCommentEvent')
        .map(el => {
            return {
                id: el.payload.issue.id,
                created_at: el.payload.issue.created_at,
                title: el.payload.issue.title,
                body: el.payload.issue.body,
                user: {
                    id: el.payload.issue.user.id,
                    login: el.payload.issue.user.login,
                },
                comment: {
                    id: el.payload.comment.id,
                    created_at: el.payload.comment.created_at,
                    user: {
                        id: el.payload.comment.user.id,
                        login: el.payload.comment.user.login,
                    },
                    body: el.payload.comment.body,
                }
            }
        });


    const githubIssues = commentEvents.reduce((result: any[], curEvent) => {
        const { comment: curCommand, ...rest } = curEvent;
        const existingIndex = result.findIndex(el => {
            return el.id === curEvent.id
                // && el.created_at === curEvent.created_at
                // && el.title === curEvent.title
                // && el.body === curEvent.body
                // && el.user.id === curEvent.user.id
                // && el.user.login === curEvent.user.login
        });

        if (existingIndex === -1) {
            result.push({ ...rest, comments: [curCommand] });
        } else {
            result[existingIndex].comments.push(curCommand);
        }
        return result;
    }, []);

    return githubIssues;
}
