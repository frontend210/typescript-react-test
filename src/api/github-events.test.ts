import mockData from "./github-events.mock.json"
import {mapResult} from "./github-events.api";
import {GithubEvent} from "./github-events.model";

test('Verifies the number of issues', () => {
    const data = mapResult(mockData as GithubEvent[])

    expect(data?.length).toEqual(3)
})

test('Verifies the first issue', () => {
    const data = mapResult(mockData as GithubEvent[])

    expect(data[0]).toStrictEqual({
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
    })
})

test('Verifies the second issue', () => {
    const data = mapResult(mockData as GithubEvent[])

    expect(data[1]).toStrictEqual({
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
    })
})

test('Verifies the third issue', () => {
    const data = mapResult(mockData as GithubEvent[])

    expect(data[2]).toStrictEqual({
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
    })
})
