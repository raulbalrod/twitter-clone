import { homePosts } from "../data/posts/homePosts";

export function getPostDestails (usernamePost) {
    return homePosts.find((post) => post.username === usernamePost);
}