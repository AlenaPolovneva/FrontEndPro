export function createPostElement(post) {
    const postEl = document.createElement('div');
    postEl.className = 'post-card';
    postEl.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button class="load-comments" data-post-id="${post.id}">Download comments</button>
        <div class="comments" id="comments-${post.id}"></div>
    `;
    return postEl;
}
export function createCommentElement(comment) {
    const commentEl = document.createElement('div');
    commentEl.className = 'comment';
    commentEl.innerHTML = `<strong>${comment.name}</strong> (${comment.email}):<br>${comment.body}`;
    return commentEl;
}