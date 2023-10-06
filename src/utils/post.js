import { homePosts } from "../data/posts/homePosts";

export function getPostDestails (username) {
    return homePosts.find((post) => post.username === username);
}