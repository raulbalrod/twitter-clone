export function getPostDestails (usernamePost) {
    return JSON.parse(localStorage.getItem('posts')).find((post) => post.username === usernamePost);
}